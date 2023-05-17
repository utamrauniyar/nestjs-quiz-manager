import { User } from "../../modules/user/user.entity";
import { Connection, getManager } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export class UserCreateSeed implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {

        await getManager().query('TRUNCATE users')

        await factory(User)().create({
            name: 'jame',
            email: 'jame@jame.com',
            password: 'Password@123'
        })

        // await factory(User)().createMany(20)
    }



}