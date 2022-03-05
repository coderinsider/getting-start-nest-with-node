import { Injectable, HttpException } from '@nestjs/common';
import { STUDENTS } from '../mock/students.mook';
@Injectable()
export class StudentsService {
	students = STUDENTS;

	getStudents(): Promise<any> {
		return new Promise(resolve =>{
			resolve(this.students);
		});
	}

	getStudent(studentId): Promise<any> {
		let id = Number(studentId);

		return new Promise(resolve => {
			const student = this.students.find(student => student.id === id);
			if(!student) {
				throw new HttpException("Students does not exists!", 404);
			}
			resolve(student);
		});
	}

	addStudent(student): Promise<any> {
		return new Promise(resolve => {
			this.students.push(student);
			resolve(this.students)
		});
	}

	deleteStudent(studentId): Promise<any> {
		let id = Number(studentId);
		return new Promise(resolve => {
			let index = this.students.findIndex(student => student.id  === id);
			if(index === -1) {
				throw new HttpException(`Student doesn't exists`, 404);
			}
			this.students.splice(1, index);
			resolve(this.students);
		});
	}
}
