import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  Prisma,
  Field
} from '@prisma/client';
import { CreateFieldDto } from './dto/create-field.dto';


@Injectable()
export class FieldsService {
  constructor(private readonly prisma: PrismaService) {}
  
  create(data: CreateFieldDto): Promise<Field> {
    return this.prisma.field.create({
      data,
    });  
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FieldWhereUniqueInput;
    where?: Prisma.FieldWhereInput;
    orderBy?: Prisma.FieldOrderByWithRelationInput;
  }): Promise<Field[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.field.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });  }

  findOne(fieldWhereUniqueInput: Prisma.FieldWhereUniqueInput) {
    return this.prisma.field.findUnique({
      where: fieldWhereUniqueInput,
    });
  }

  update(params: {
    where: Prisma.FieldWhereUniqueInput;
    data: Prisma.FieldUpdateInput;
  }): Promise<Field> {
    const { data, where } = params;
    return this.prisma.field.update({
      data,
      where,
    });  }

    async replaceAll(params: {
      data: Array<Prisma.FieldCreateManyInput>;
    }): Promise<Array<Field>> {
      const { data } = params;
      await this.prisma.field.deleteMany();
      await this.prisma.field.createMany({
        data,
      }); 
      return this.prisma.field.findMany({}); 
    }

  remove(where: Prisma.FieldWhereUniqueInput): Promise<Field> {
    return this.prisma.field.delete({
      where,
    });  }
}
