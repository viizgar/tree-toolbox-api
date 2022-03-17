import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FieldsModule } from './fields/fields.module';
import { NamespacesModule } from './namespaces/namespaces.module';
import { SkeletonsModule } from './skeletons/skeletons.module';
import { NodeTypesModule } from './node-types/node-types.module';

@Module({
  imports: [FieldsModule, NamespacesModule, SkeletonsModule, NodeTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
