import { Test, TestingModule } from '@nestjs/testing';
import { AboutController } from './About.controller';

describe('Users Controller', () => {
  let controller: AboutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutController],
    }).compile();

    controller = module.get<AboutController>(AboutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
