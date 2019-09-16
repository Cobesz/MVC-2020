import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '../config/config.service';

const configService = new ConfigService(`${process.env.NODE_ENV}.env`);

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: configService.get('DATABASE_USER'),
                password: configService.get('DATABASE_PASSWORD'),
                // username: process.env.DATABASE_USER,
                // password: process.env.DATABASE_PASSWORD,
                database: 'mvc-2020',
            });
            // sequelize.addModels([Cat]);
            await sequelize.sync();
            return sequelize;
        },
    },
];