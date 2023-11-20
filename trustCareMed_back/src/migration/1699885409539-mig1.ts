import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig11699885409539 implements MigrationInterface {
    name = 'Mig11699885409539'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctor" ADD "role" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctor" DROP COLUMN "role"`);
    }

}
