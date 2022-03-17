import { Test, TestingModule } from '@nestjs/testing';
import { SkeletonsService } from './skeletons.service';

describe('SkeletonsService', () => {
  let service: SkeletonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SkeletonsService],
    }).compile();

    service = module.get<SkeletonsService>(SkeletonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
