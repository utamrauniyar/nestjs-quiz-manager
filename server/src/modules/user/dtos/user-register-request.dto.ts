import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsEmail, Length, Matches } from "class-validator"
import { MESSAGES, REGEX } from "src/app.utils"


export class UserRegisterRequestDto {
    @ApiProperty({
        description: "The name of the User",
        example: "Jamyy Jone"
    })
    @IsNotEmpty()
    name: string


    @ApiProperty({
        description: "The email address of the User",
        example: "jamy@gmail.com"
    })
    @IsNotEmpty()
    @IsEmail()
    email: string


    @ApiProperty({
        description: "The password of the User",
        example: "@Password$123"
    })
    @IsNotEmpty()
    @Length(8, 24)
    @Matches(REGEX.PASSWORD_RULE, { message: MESSAGES.PASSWORD_RULE_MESSAGE, })
    password: string


    @ApiProperty({
        description: "Confirm the password",
        example: "@Password$123"
    })
    @Length(8, 24)
    @IsNotEmpty()
    @Matches(REGEX.PASSWORD_RULE, { message: MESSAGES.PASSWORD_RULE_MESSAGE, })
    confirm_password: string
}