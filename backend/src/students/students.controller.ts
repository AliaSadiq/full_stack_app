import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { StudentEntity } from './entities/student.entity';
@Controller('students')
@ApiTags('articles')

export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  @ApiCreatedResponse({ type: StudentEntity })

  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  @ApiOkResponse({ type: StudentEntity, isArray: true })

  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: StudentEntity })

  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: StudentEntity })

  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: StudentEntity })
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }
}
