import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDTO }  from './dto/create-student.dto';
@Controller('students')
export class StudentsController {
	constructor(private studentsService: StudentsService) {

	}
	@Get() // Get Request
	async getStudents() {
		const students = await this.studentsService.getStudents();
		return students;
	}

	@Get(':studentId')
	async getStudent(@Param('studentId') studentId) {
		const student = await this.studentsService.getStudent(studentId);
		return student;
	}

	@Post()
	async addStudent(@Body() createStudentDTO: CreateStudentDTO) {
		const student = await this.studentsService.addStudent(createStudentDTO);
		return student;
	}

	@Delete(":studentId")
	async deleteStudent(@Query() query) {
		const students = await this.studentsService.deleteStudent(query.studentId);
		return students;
	}
}

