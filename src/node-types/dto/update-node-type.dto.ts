import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateNodeTypeDto } from './create-node-type.dto';

export class UpdateNodeTypeDto extends PartialType(CreateNodeTypeDto) {
    @ApiProperty()
    id: number;
    @ApiProperty()
    created: Date;
    @ApiProperty()
    modified: Date;
}
