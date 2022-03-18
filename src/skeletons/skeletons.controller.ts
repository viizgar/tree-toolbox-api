import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SkeletonsService } from './skeletons.service';
import { CreateSkeletonDto } from './dto/create-skeleton.dto';
import { UpdateSkeletonDto } from './dto/update-skeleton.dto';
import { ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

@ApiTags('skeletons')
@Controller('skeletons')
export class SkeletonsController {
  constructor(private readonly skeletonsService: SkeletonsService) {}

  @Post()
  create(@Body() createSkeletonDto: CreateSkeletonDto) {
    return this.skeletonsService.create(createSkeletonDto);
  }

  @Get()
  findAll() {
    return this.skeletonsService.findAll({});
  }

  @Get(':nodeType/:field')
  findOne(@Param('nodeType') nodeType: string, @Param('field') field: string) {
    return this.skeletonsService.findOne({nodeType_field: {nodeType: Number(nodeType), field: Number(field)}});
  }

  @Put()
  replaceAll(@Body() skeletons: Array<CreateSkeletonDto>) {
    return this.skeletonsService.replaceAll({ data: skeletons } );
  }

  @Put(':nodeType/:field')
  update(@Param('nodeType') nodeType: string, @Param('field') field: string, @Body() updateSkeletonDto: UpdateSkeletonDto) {
    return this.skeletonsService.update({ where: {nodeType_field: {nodeType: Number(nodeType), field: Number(field)}}, data: updateSkeletonDto});
  }

  @Delete(':nodeType/:field')
  remove(@Param('nodeType') nodeType: string, @Param('field') field: string) {
    return this.skeletonsService.remove({nodeType_field: {nodeType: Number(nodeType), field: Number(field)}});
  }
}
