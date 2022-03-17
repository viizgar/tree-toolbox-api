import { Module } from '@nestjs/common';
import { SkeletonsService } from './skeletons.service';
import { SkeletonsController } from './skeletons.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SkeletonsController],
  providers: [SkeletonsService, PrismaService]
})
export class SkeletonsModule {}
