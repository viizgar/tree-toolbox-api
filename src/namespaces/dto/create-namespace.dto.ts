import { ApiProperty } from "@nestjs/swagger";
import { Namespace } from "@prisma/client";

export class CreateNamespaceDto {
    @ApiProperty()
    uri: string;
    @ApiProperty()
    prefix: string;
    @ApiProperty()
    created: Date;
    @ApiProperty()
    modified: Date;

}
