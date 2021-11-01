import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDogs1621166093996 implements MigrationInterface {
    name = 'CreateDogs1621166093996'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dog" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "age" integer NOT NULL, "bread" character varying(100), CONSTRAINT "PK_187826f37fd8e592a5711350db1" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "dog"`);
    }

}
