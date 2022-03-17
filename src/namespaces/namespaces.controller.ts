import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { NamespacesService } from './namespaces.service';
import { CreateNamespaceDto } from './dto/create-namespace.dto';
import { UpdateNamespaceDto } from './dto/update-namespace.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('namespaces')
@Controller('namespaces')
export class NamespacesController {
  constructor(private readonly namespacesService: NamespacesService) {}

  @Post()
  create(@Body() createNamespaceDto: CreateNamespaceDto) {
    return this.namespacesService.create(createNamespaceDto);
  }

  @Get()
  findAll() {
    return this.namespacesService.findAll({});
  }

  @Get(':uri')
  findOne(@Param('uri') uri: string) {
    return this.namespacesService.findOne({ uri });
  }

  @Put(':uri')
  update(@Param('uri') uri: string, @Body() updateNamespaceDto: UpdateNamespaceDto) {
    return this.namespacesService.update({ where: {uri:uri}, data: updateNamespaceDto});
  }

  @Delete(':uri')
  remove(@Param('uri') uri: string) {
    return this.namespacesService.remove({ uri });
  }
}
