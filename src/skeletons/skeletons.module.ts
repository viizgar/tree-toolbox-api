import { Module } from '@nestjs/common';
import { SkeletonsService } from './skeletons.service';
import { SkeletonsController } from './skeletons.controller';

@Module({
  controllers: [SkeletonsController],
  providers: [SkeletonsService]
})
export class SkeletonsModule {}
