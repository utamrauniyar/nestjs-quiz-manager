import { IsNotEmpty, Length } from "class-validator"

export class CreateQuizDto {

    @IsNotEmpty({ message: 'The quiz should have a titile' })
    @Length(3, 355)
    title: string


    @IsNotEmpty()
    @Length(3)
    description: string
}