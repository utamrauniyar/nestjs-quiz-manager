import { IsNotEmpty, Length } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";


export class CreateOptionDto {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Length(3, 355)
    text: string;


    @IsNotEmpty()
    questionId: number

    @IsNotEmpty()
    isCorrect: boolean
}