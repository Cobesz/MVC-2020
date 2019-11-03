import {Module} from '@nestjs/common';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsersModule} from './modules/users/users.module';
import * as process from 'process';
import {ConfigService} from './config/config.service';
import {ConfigModule} from './config/config.module';
import {RouterModule, Routes} from 'nest-router';
import {HomeModule} from './modules/home/home.module';
import {routes} from './router/routes';
import {ProfileModule} from './modules/profile/profile.module';
import {WishlistsModule} from './modules/wishlists/wishlists.module';
import {GamesModule} from './modules/games/games.module';
import {ScreenshotsModule} from './modules/screenshots/screenshots.module';
import {TrailersModule} from './modules/trailers/trailers.module';
import {PlatformsModule} from './modules/platforms/platforms.module';
import {AuthModule} from './core/auth/auth.module';
import {LoginModule} from './modules/login/login.module';
import {RegisterModule} from './modules/register/register.module';
import {AdminModule} from "./modules/admin/admin.module";

const configService = new ConfigService(`${process.env.NODE_ENV}.env`);

const username = configService.get('DATABASE_USER') || 'mysql';
const password = configService.get('DATABASE_PASSWORD') || 'example';

@Module({
    imports: [
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
        HomeModule,
        ProfileModule,
        UsersModule,
        WishlistsModule,
        GamesModule,
        ScreenshotsModule,
        TrailersModule,
        PlatformsModule,
        ConfigModule,
        AuthModule,
        LoginModule,
        RegisterModule,
        AdminModule,
        RouterModule.forRoutes(routes),
    ],
    providers: [AppService]
})
export class AppModule {
}
