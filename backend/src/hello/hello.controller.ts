import { Controller, Get, Query } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  greet(@Query('name') name?: string) {
    const who = name?.trim() || 'Skilluv';
    return {
      message: `Hello ${who}!`,
      server_time: new Date().toISOString(),
    };
  }
}
