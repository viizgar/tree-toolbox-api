import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { FieldsService } from './fields.service';
import { CreateFieldDto } from './dto/create-field.dto';
import { UpdateFieldDto } from './dto/update-field.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('fields')
@Controller('fields')
export class FieldsController {
  constructor(private readonly fieldsService: FieldsService) {}

  @Post()
  create(@Body() field: CreateFieldDto) {
    return this.fieldsService.create(field);
  }

  @Get()
  findAll() {
    return this.fieldsService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fieldsService.findOne({ id: Number(id) });
  }

  @Put()
  replaceAll(@Body() fields: Array<CreateFieldDto>) {
    return this.fieldsService.replaceAll({ data: fields } );
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateField: UpdateFieldDto) {
    return this.fieldsService.update({ data: updateField, where: {id: Number(id)} } );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fieldsService.remove({ id: Number(id) });
  }
}
