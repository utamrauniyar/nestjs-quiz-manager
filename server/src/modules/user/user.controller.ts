import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { SETTINGS } from "src/app.utils";
import { User } from "./user.entity";
import { UserRegisterRequestDto } from "./dtos/user-register-request.dto";


@Controller('user')

export class UserController {

    constructor(private userService: UserService) { }

    @Post('/register')
    async doUserRegistration(
        @Body(SETTINGS.VALIDATION_PIPE)
        userRegister: UserRegisterRequestDto
    ): Promise<User> {
        return await this.userService.doUserRegistration(userRegister)
    }
}

export { UserRegisterRequestDto };

