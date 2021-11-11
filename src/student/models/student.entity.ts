/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("students")

export class StudentEntity{
  
  @PrimaryGeneratedColumn()  
  id: number;
  @Column({unique: true})  
  code:number;
  @Column()
  name: string;
  @Column({ default: "https://www.mcicon.com/wp-content/uploads/2021/01/People_User_1-copy-4.jpg"})
  photoURL:string;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: Date;
}