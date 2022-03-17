import { Module } from '@nestjs/common';
import { NamespacesService } from './namespaces.service';
import { NamespacesController } from './namespaces.controller';

@Module({
  controllers: [NamespacesController],
  providers: [NamespacesService]
})
export class NamespacesModule {}
