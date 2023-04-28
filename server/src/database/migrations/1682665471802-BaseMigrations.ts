import {MigrationInterface, QueryRunner} from "typeorm";

export class BaseMigrations1682665471802 implements MigrationInterface {
    name = 'BaseMigrations1682665471802'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quizes" ALTER COLUMN "isActive" SET DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quizes" ALTER COLUMN "isActive" SET DEFAULT true`);
    }

}
