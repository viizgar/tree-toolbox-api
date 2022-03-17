import { PartialType } from '@nestjs/swagger';
import { CreateSkeletonDto } from './create-skeleton.dto';

export class UpdateSkeletonDto extends PartialType(CreateSkeletonDto) {}
