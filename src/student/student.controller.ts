/* eslint-disable prettier/prettier */
import {Body,Controller,Delete,Get,HttpStatus,NotFoundException,Param,Patch,Post,Put,Query,Res,
} from '@nestjs/common';
import { CreateStudentDTO } from './dto/create_student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  
    constructor(private readonly studentService: StudentService) {}

  @Get()
    async getStudents(@Res() res) {
    const students = await this.studentService.getStudents();

    return res.status(HttpStatus.OK).json({
            message:'Students listed',
            data: students
        });
        

    }

    @Get('/:studentId')
    async getStudent(@Res() res , @Param('studentId') id ){
        const student = await this.studentService.getStudentByID(id);

        if(!student){
            throw new NotFoundException('Student does not exists');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Student found',
            data: student
        });

    }

    @Post("/create")
    async createStudent(@Res() res, @Body() createStudentDTO: CreateStudentDTO){

        const student = await this.studentService.createStudent(createStudentDTO);

        return res.status(HttpStatus.CREATED).json({
            message:'Student created',
            data: student
        });
    }

    @Put('/update/:studentId')
    async updateStudent(  @Res() res, @Body() createStudentDTO: CreateStudentDTO, @Param('studentId') id){
        const student = await this.studentService.updateStudent(id, createStudentDTO);

        if(!student){
            throw new NotFoundException('Student does not exists');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Student updated',
            data: student
        });
    }

    @Delete('/delete/:studentId')
    async deleteStudent(@Res() res, @Param('studentId') id){
        
        const student = await this.studentService.deleteStudent(id);

        if(!student){
            throw new NotFoundException('Student does not exists');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Student deleted',
            data: student
        });
    }


}