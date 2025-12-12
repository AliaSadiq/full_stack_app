import { ApiProperty } from "@nestjs/swagger";

export class CreateStudentDto {
        @ApiProperty()
        name: string;
      
        @ApiProperty()
        email: string;

        @ApiProperty({ required: false })
        age?: number;
}
