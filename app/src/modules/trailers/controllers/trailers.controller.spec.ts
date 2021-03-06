import { Test, TestingModule } from '@nestjs/testing';
import { TrailersController } from './trailers.controller';

describe('Users Controller', () => {
  let controller: TrailersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrailersController],
    }).compile();

    controller = module.get<TrailersController>(TrailersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
