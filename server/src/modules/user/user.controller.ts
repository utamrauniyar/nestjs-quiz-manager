import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { SETTINGS } from "src/app.utils";
import { User } from "./user.entity";
import { UserRegisterRequestDto } from "./dtos/user-register-request.dto";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }


    @ApiCreatedResponse({ description: 'Created user object as response', type: User })
    @ApiBadRequestResponse({ description: 'user cannot register. Try again!' })
    @Post('/register')
    async doUserRegistration(
        @Body(SETTINGS.VALIDATION_PIPE)
        userRegister: UserRegisterRequestDto
    ): Promise<User> {
        return await this.userService.doUserRegistration(userRegister)
    }
}

export { UserRegisterRequestDto };

