import { Sequelize } from 'sequelize-typescript';
// import { Cat } from '../cats/cat.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'cas',
                password: 'ccoff64b',
                database: 'mvc-2020',
            });
            // sequelize.addModels([Cat]);
            await sequelize.sync();
            return sequelize;
        },
    },
];