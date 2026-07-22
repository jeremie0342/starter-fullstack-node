import { Test } from '@nestjs/testing';
import { HelloController } from './hello.controller';

describe('HelloController', () => {
  let controller: HelloController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({ controllers: [HelloController] }).compile();
    controller = module.get(HelloController);
  });

  it('defaults to Skilluv when no name given', () => {
    const r = controller.greet();
    expect(r.message).toBe('Hello Skilluv!');
    expect(r.server_time).toEqual(expect.any(String));
  });

  it('echoes name', () => {
    const r = controller.greet('Ada');
    expect(r.message).toBe('Hello Ada!');
  });

  it('trims whitespace and falls back on empty', () => {
    expect(controller.greet('   ').message).toBe('Hello Skilluv!');
  });
});
