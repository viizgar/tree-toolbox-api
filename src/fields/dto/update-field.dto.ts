import { Field, Prisma } from '@prisma/client'
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFieldDto } from './create-field.dto';


export class UpdateFieldDto extends PartialType(CreateFieldDto) {
    @ApiProperty()
    id: number;
    @ApiProperty()
    created: Date;
    @ApiProperty()
    modified: Date;
    
}
