import { Module } from '@nestjs/common';
import { NamespacesService } from './namespaces.service';
import { NamespacesController } from './namespaces.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [NamespacesController],
  providers: [NamespacesService, PrismaService]
})
export class NamespacesModule {}
