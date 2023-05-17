import {MigrationInterface, QueryRunner} from "typeorm";

export class addUserRoles1683775071662 implements MigrationInterface {
    name = 'addUserRoles1683775071662'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "users_role_enum" AS ENUM('admin', 'member')`);
        await queryRunner.query(`ALTER TABLE "users" ADD "role" "users_role_enum" NOT NULL DEFAULT 'member'`);
        await queryRunner.query(`ALTER TABLE "quizes" ALTER COLUMN "isActive" SET DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quizes" ALTER COLUMN "isActive" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
        await queryRunner.query(`DROP TYPE "users_role_enum"`);
    }

}
