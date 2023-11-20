import { MigrationInterface, QueryRunner } from "typeorm";

export class Migr21699886673840 implements MigrationInterface {
    name = 'Migr21699886673840'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctor" ADD "role" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctor" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP COLUMN "role"`);
    }

}
