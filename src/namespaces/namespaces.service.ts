import { Injectable } from '@nestjs/common';
import { Namespace, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateNamespaceDto } from './dto/create-namespace.dto';
import { UpdateNamespaceDto } from './dto/update-namespace.dto';

@Injectable()
export class NamespacesService {

  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateNamespaceDto): Promise<Namespace> {
    return this.prisma.namespace.create({
      data,
    });  
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.NamespaceWhereUniqueInput;
    where?: Prisma.NamespaceWhereInput;
    orderBy?: Prisma.NamespaceOrderByWithRelationInput;
  }): Promise<Namespace[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.namespace.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });  }

  findOne(namespaceWhereUniqueInput: Prisma.NamespaceWhereUniqueInput) {
      return this.prisma.namespace.findUnique({
        where: namespaceWhereUniqueInput,
      });
    }

    update(params: {
      where: Prisma.NamespaceWhereUniqueInput;
      data: Prisma.NamespaceUpdateInput;
    }): Promise<Namespace> {
      const { data, where } = params;
      return this.prisma.namespace.update({
        data,
        where,
      });  }

      remove(where: Prisma.NamespaceWhereUniqueInput): Promise<Namespace> {
        return this.prisma.namespace.delete({
          where,
        });  }
}
