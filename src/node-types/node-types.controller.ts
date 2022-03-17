import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { NodeTypesService } from './node-types.service';
import { CreateNodeTypeDto } from './dto/create-node-type.dto';
import { UpdateNodeTypeDto } from './dto/update-node-type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('node-types')
@Controller('node-types')
export class NodeTypesController {
  constructor(private readonly nodeTypesService: NodeTypesService) {}

  @Post()
  create(@Body() createNodeTypeDto: CreateNodeTypeDto) {
    return this.nodeTypesService.create(createNodeTypeDto);
  }

  @Get()
  findAll() {
    return this.nodeTypesService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nodeTypesService.findOne({id: Number(id)});
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateNodeTypeDto: UpdateNodeTypeDto) {
    return this.nodeTypesService.update({ where: {id: Number(id)}, data: updateNodeTypeDto});
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nodeTypesService.remove({id: Number(id)});
  }
}
