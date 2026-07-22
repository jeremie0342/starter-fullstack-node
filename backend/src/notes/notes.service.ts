import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';

@Injectable()
export class NotesService {
  constructor(@InjectRepository(Note) private readonly repo: Repository<Note>) {}

  list(): Promise<Note[]> {
    return this.repo.find({ order: { createdAt: 'DESC' }, take: 100 });
  }

  async create(text: string): Promise<Note> {
    const trimmed = text.trim();
    const note = this.repo.create({ text: trimmed });
    return this.repo.save(note);
  }

  async remove(id: string): Promise<void> {
    const res = await this.repo.delete(id);
    if (!res.affected) throw new NotFoundException(`note ${id} not found`);
  }
}
