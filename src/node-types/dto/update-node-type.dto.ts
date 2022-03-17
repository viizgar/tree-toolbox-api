import { PartialType } from '@nestjs/swagger';
import { CreateNodeTypeDto } from './create-node-type.dto';

export class UpdateNodeTypeDto extends PartialType(CreateNodeTypeDto) {}
