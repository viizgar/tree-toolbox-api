import { Injectable } from '@nestjs/common';
import { CreateSkeletonDto } from './dto/create-skeleton.dto';
import { UpdateSkeletonDto } from './dto/update-skeleton.dto';

@Injectable()
export class SkeletonsService {
  create(createSkeletonDto: CreateSkeletonDto) {
    return 'This action adds a new skeleton';
  }

  findAll() {
    return `This action returns all skeletons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} skeleton`;
  }

  update(id: number, updateSkeletonDto: UpdateSkeletonDto) {
    return `This action updates a #${id} skeleton`;
  }

  remove(id: number) {
    return `This action removes a #${id} skeleton`;
  }
}
