import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsersModule} from './modules/users/users.module';
import * as process from 'process';
import {ConfigService} from './config/config.service';
import {ConfigModule} from './config/config.module';
import {RouterModule, Routes} from 'nest-router';
import {HomeModule} from './modules/home/home.module';
import {routes} from './router/routes';

const configService = new ConfigService(`${process.env.NODE_ENV}.env`);

const username = configService.get('DATABASE_USER') || 'mysql';
const password = configService.get('DATABASE_PASSWORD') || 'example';

@Module({
    imports: [
        RouterModule.forRoutes(routes),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username,
            password,
            database: 'mvc-2020',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        UsersModule, ConfigModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
