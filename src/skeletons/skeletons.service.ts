import { Injectable } from '@nestjs/common';
import { Prisma, Skeleton } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateSkeletonDto } from './dto/create-skeleton.dto';
import { UpdateSkeletonDto } from './dto/update-skeleton.dto';

@Injectable()
export class SkeletonsService {

  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateSkeletonDto) : Promise<Skeleton> {
    return this.prisma.skeleton.create({
      data,
    });  
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SkeletonWhereUniqueInput;
    where?: Prisma.SkeletonWhereInput;
    orderBy?: Prisma.SkeletonOrderByWithRelationInput;
  }): Promise<Skeleton[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.skeleton.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });  }

  findOne(skeletonWhereUniqueInput: Prisma.SkeletonWhereUniqueInput) {
    return this.prisma.skeleton.findUnique({
      where: skeletonWhereUniqueInput,
    });
  }

  async replaceAll(params: {
    data: Array<Prisma.SkeletonCreateManyInput>;
  }): Promise<Array<Skeleton>> {
    const { data } = params;
    await this.prisma.skeleton.deleteMany();
    await this.prisma.skeleton.createMany({
      data,
    }); 
    return this.prisma.skeleton.findMany({}); 
  }



  update(params: {
    where: Prisma.SkeletonWhereUniqueInput;
    data: Prisma.SkeletonUpdateInput;
  }): Promise<Skeleton> {
    const { data, where } = params;
    return this.prisma.skeleton.update({
      data,
      where,
    });  }

    remove(where: Prisma.SkeletonWhereUniqueInput): Promise<Skeleton> {
      return this.prisma.skeleton.delete({
        where,
      });  }
}
