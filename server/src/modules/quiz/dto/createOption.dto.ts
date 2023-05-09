import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";


export class CreateOptionDto {

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'The option for a question',
        example: 'Owl',
    })
    @IsNotEmpty()
    @Length(3, 355)
    text: string;

    @ApiProperty({
        description: 'The ID of the question',
        example: 1,
    })
    @IsNotEmpty()
    questionId: number

    @ApiProperty({
        description: 'Whether the option is correct or not',
        example: true,
    })
    @IsNotEmpty()
    isCorrect: boolean
}