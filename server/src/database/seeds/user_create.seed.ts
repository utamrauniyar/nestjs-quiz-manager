import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export class UserCreateSeed implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        console.log(' 12 23 34')
    }



}