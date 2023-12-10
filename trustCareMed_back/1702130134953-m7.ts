import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class M71702130134953 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
          name: 'rendez_vous',
          columns: [
            { name: 'id', type: 'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
            { name: 'patientName', type: 'varchar' },
            { name: 'doctor', type: 'varchar' },
            { name: 'appointmentDate', type: 'date' },
            { name: 'appointmentTime', type: 'time' },
          ],
        }), true);
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('rendez_vous');
      }
}