import { Injectable } from '@nestjs/common';
import { CreateNodeTypeDto } from './dto/create-node-type.dto';
import { UpdateNodeTypeDto } from './dto/update-node-type.dto';

@Injectable()
export class NodeTypesService {
  create(createNodeTypeDto: CreateNodeTypeDto) {
    return 'This action adds a new nodeType';
  }

  findAll() {
    return `This action returns all nodeTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nodeType`;
  }

  update(id: number, updateNodeTypeDto: UpdateNodeTypeDto) {
    return `This action updates a #${id} nodeType`;
  }

  remove(id: number) {
    return `This action removes a #${id} nodeType`;
  }
}
