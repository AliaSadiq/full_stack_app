import { ApiProperty } from "@nestjs/swagger";

export class StudentEntity {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: true })
  email?: string;

  @ApiProperty()
  age: number;
}
