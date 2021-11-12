/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { IStudent } from './interfaces/student.interface';
import { CreateStudentDTO } from './dto/create_student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from './models/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {

    constructor(@InjectRepository(StudentEntity) private readonly studentRepository: Repository<IStudent> ){}


    async getStudents(): Promise<IStudent[]> {
        const students = await this.studentRepository.find();
        return students;
    }

    async getStudentByID(studentId: string):Promise<IStudent>{
        const student = await this.studentRepository.findOne(studentId);
        return student;
    }

    async createStudent(createStudentDTO: CreateStudentDTO): Promise<IStudent>{
        const student = await this.studentRepository.save(createStudentDTO);
        return student;
    }

    async updateStudent(studentId: string, createStudentDTO: CreateStudentDTO):Promise<any>{
        const updateStudent = await this.studentRepository.update(studentId , createStudentDTO );
        return updateStudent;
    }

    async deleteStudent(studentId: string):Promise<any>{
        const deleteStudent = await this.studentRepository.delete(studentId);
        return deleteStudent;
    }



}