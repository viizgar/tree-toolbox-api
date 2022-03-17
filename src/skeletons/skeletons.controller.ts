import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SkeletonsService } from './skeletons.service';
import { CreateSkeletonDto } from './dto/create-skeleton.dto';
import { UpdateSkeletonDto } from './dto/update-skeleton.dto';
import { ApiTags } from '@nestjs/swagger';

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
    return this.skeletonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skeletonsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSkeletonDto: UpdateSkeletonDto) {
    return this.skeletonsService.update(+id, updateSkeletonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skeletonsService.remove(+id);
  }
}
