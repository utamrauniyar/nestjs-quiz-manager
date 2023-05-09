import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, Length } from "class-validator"

export class CreateQuizDto {

    @ApiProperty({
        description: 'The title of quiz',
        example: 'How good are your with NestJs?'
    })
    @IsNotEmpty({ message: 'The quiz should have a title' })
    @Length(3, 355)
    title: string


    @ApiProperty({
        description: 'A small description for the user',
        example:
            'This quiz will ask your questions on NestJs and test your knowledge.',
    })
    @IsNotEmpty()
    @Length(3)
    description: string
}