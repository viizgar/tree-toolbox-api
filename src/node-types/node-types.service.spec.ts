import { Test, TestingModule } from '@nestjs/testing';
import { NodeTypesService } from './node-types.service';

describe('NodeTypesService', () => {
  let service: NodeTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NodeTypesService],
    }).compile();

    service = module.get<NodeTypesService>(NodeTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
