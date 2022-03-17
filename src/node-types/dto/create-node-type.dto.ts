import { ApiProperty } from "@nestjs/swagger";

export class CreateNodeTypeDto {
    @ApiProperty()
    namespace: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    label: string;
    @ApiProperty()
    ricoRecordSetType: string;
    @ApiProperty()
    classification: string;
    @ApiProperty()
    weight: number;
    @ApiProperty()
    parentIds: number[];
    @ApiProperty()
    nodeTypeId: number;
}
