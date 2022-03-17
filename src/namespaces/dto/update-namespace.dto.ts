import { PartialType } from '@nestjs/swagger';
import { CreateNamespaceDto } from './create-namespace.dto';

export class UpdateNamespaceDto extends PartialType(CreateNamespaceDto) {}
