import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration11699788382953 implements MigrationInterface {
    name = 'Migration11699788382953'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "doctor" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "adress" character varying NOT NULL, "email" character varying NOT NULL, "phone" integer NOT NULL, "speciality" character varying NOT NULL, "matricule" character varying NOT NULL, "cin" character varying NOT NULL, "dateOfBirth" character varying NOT NULL, CONSTRAINT "PK_ee6bf6c8de78803212c548fcb94" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "doctor"`);
    }

}
