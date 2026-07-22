import { IsString, Length } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @Length(1, 500)
  text!: string;
}
