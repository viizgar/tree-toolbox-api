import { Test, TestingModule } from '@nestjs/testing';
import { SkeletonsController } from './skeletons.controller';
import { SkeletonsService } from './skeletons.service';

describe('SkeletonsController', () => {
  let controller: SkeletonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkeletonsController],
      providers: [SkeletonsService],
    }).compile();

    controller = module.get<SkeletonsController>(SkeletonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
