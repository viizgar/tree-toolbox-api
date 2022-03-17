import { Field, Prisma } from '@prisma/client'
import { ApiProperty } from '@nestjs/swagger';


export class UpdateFieldDto implements Field {
    @ApiProperty()
    id: number;
    @ApiProperty()
    created: Date;
    @ApiProperty()
    modified: Date;
    @ApiProperty()
    namespace: string
    @ApiProperty()
    name: string
    @ApiProperty()
    label: string
    @ApiProperty()
    weight: number
    @ApiProperty()
    restrictions: Prisma.JsonValue
    @ApiProperty()
    fieldType: string
    @ApiProperty()
    description: string
}
