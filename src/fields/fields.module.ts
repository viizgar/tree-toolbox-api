import { Module } from '@nestjs/common';
import { FieldsService } from './fields.service';
import { FieldsController } from './fields.controller';
import { PrismaModule } from 'src/prisma.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [FieldsController],
  providers: [FieldsService, PrismaModule, PrismaService],
})
export class FieldsModule {}
