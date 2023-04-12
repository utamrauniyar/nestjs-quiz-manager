import { IsNotEmpty, Length } from "class-validator"

export class CreateQuestionDto {

    @IsNotEmpty()
    @Length(3, 355)
    question: string

    @IsNotEmpty()
    quizId: number
}