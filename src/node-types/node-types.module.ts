import { Module } from '@nestjs/common';
import { NodeTypesService } from './node-types.service';
import { NodeTypesController } from './node-types.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [NodeTypesController],
  providers: [NodeTypesService, PrismaService]
})
export class NodeTypesModule {}
