import { Injectable } from '@nestjs/common';
import { CreateNamespaceDto } from './dto/create-namespace.dto';
import { UpdateNamespaceDto } from './dto/update-namespace.dto';

@Injectable()
export class NamespacesService {
  create(createNamespaceDto: CreateNamespaceDto) {
    return 'This action adds a new namespace';
  }

  findAll() {
    return `This action returns all namespaces`;
  }

  findOne(id: number) {
    return `This action returns a #${id} namespace`;
  }

  update(id: number, updateNamespaceDto: UpdateNamespaceDto) {
    return `This action updates a #${id} namespace`;
  }

  remove(id: number) {
    return `This action removes a #${id} namespace`;
  }
}
