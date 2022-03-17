import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
    return this.namespacesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.namespacesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNamespaceDto: UpdateNamespaceDto) {
    return this.namespacesService.update(+id, updateNamespaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.namespacesService.remove(+id);
  }
}
