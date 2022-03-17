import { ApiProperty } from '@nestjs/swagger';
import { Skeleton } from '@prisma/client';

export class CreateSkeletonDto implements Skeleton {
    @ApiProperty()
    nodeType: number;
    @ApiProperty()
    field: number;
    @ApiProperty()
    created: Date;
    @ApiProperty()
    modified: Date;
    @ApiProperty()
    weight: number;
}
