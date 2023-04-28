import { Injectable } from "@nestjs/common";
import { UserRegisterRequestDto } from "./user.controller";
import { User } from "./user.entity";


@Injectable()

export class UserService {

    async doUserRegistration(userRegister: UserRegisterRequestDto): Promise<User> {

        const user = new User();
        user.name = userRegister.name
        user.email = userRegister.email
        user.password = userRegister.password

        return await user.save()

    }

    async getUserByEmail(email: string): Promise<any> {
        return User.findOne({ where: { email } })
    }
}