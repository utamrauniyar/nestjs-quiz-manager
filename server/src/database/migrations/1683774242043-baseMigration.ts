import {MigrationInterface, QueryRunner} from "typeorm";

export class baseMigration1683774242043 implements MigrationInterface {
    name = 'baseMigration1683774242043'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quizes" ALTER COLUMN "isActive" SET DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quizes" ALTER COLUMN "isActive" SET DEFAULT true`);
    }

}
