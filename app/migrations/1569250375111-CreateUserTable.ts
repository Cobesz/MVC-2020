import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUserTable1569250375111 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_58e4dbff0e1a32a9bdc861bb29` ON `user`", undefined);
        await queryRunner.query("DROP INDEX `IDX_7141d4923470530a8208651a71` ON `user`", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `lastName` `lastName` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `password` `password` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `password` `password` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `lastName` `lastName` varchar(255) NULL", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_7141d4923470530a8208651a71` ON `user` (`middleName`)", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_58e4dbff0e1a32a9bdc861bb29` ON `user` (`firstName`)", undefined);
    }

}
