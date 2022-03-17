import { Field, Prisma } from '@prisma/client'
import { ApiProperty } from '@nestjs/swagger';


export class CreateFieldDto  {
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
