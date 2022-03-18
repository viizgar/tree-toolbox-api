import { Injectable } from '@nestjs/common';
import { NodeType, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateNodeTypeDto } from './dto/create-node-type.dto';
import { UpdateNodeTypeDto } from './dto/update-node-type.dto';

@Injectable()
export class NodeTypesService {

  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateNodeTypeDto) : Promise<NodeType> {
    return this.prisma.nodeType.create({
      data,
    });  
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.NodeTypeWhereUniqueInput;
    where?: Prisma.NodeTypeWhereInput;
    orderBy?: Prisma.NodeTypeOrderByWithRelationInput;
  }): Promise<NodeType[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.nodeType.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });  }

    findOne(nodeTypeWhereUniqueInput: Prisma.NodeTypeWhereUniqueInput) {
      return this.prisma.nodeType.findUnique({
        where: nodeTypeWhereUniqueInput,
      });
    }

    async replaceAll(params: {
      data: Array<Prisma.NodeTypeCreateManyInput>;
    }): Promise<Array<NodeType>> {
      const { data } = params;
      await this.prisma.nodeType.deleteMany();
      await this.prisma.nodeType.createMany({
        data,
      }); 
      return this.prisma.nodeType.findMany({}); 
    }


    update(params: {
      where: Prisma.NodeTypeWhereUniqueInput;
      data: Prisma.NodeTypeUpdateInput;
    }): Promise<NodeType> {
      const { data, where } = params;
      return this.prisma.nodeType.update({
        data,
        where,
      });  }

      remove(where: Prisma.NodeTypeWhereUniqueInput): Promise<NodeType> {
        return this.prisma.nodeType.delete({
          where,
        });  }
}
