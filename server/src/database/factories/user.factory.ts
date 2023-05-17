import { define } from "typeorm-seeding";
import { User } from "../../modules/user/user.entity";
import { randEmail, randFullName, randPassword } from "@ngneat/falso";


define(User, () => {
    const user = new User()
    user.name = randFullName()
    user.email = randEmail()
    user.password = randPassword()

    return user
})