import { Test, TestingModule } from '@nestjs/testing';
import { NodeTypesController } from './node-types.controller';
import { NodeTypesService } from './node-types.service';

describe('NodeTypesController', () => {
  let controller: NodeTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NodeTypesController],
      providers: [NodeTypesService],
    }).compile();

    controller = module.get<NodeTypesController>(NodeTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
