import * as passport from 'passport';
import {Logger, MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common';
import {AuthService} from './auth.service';
import {JwtStrategy} from './passport/jwt.strategy';
import {AuthController} from './auth.controller';
import {UsersModule} from '../../modules/users/users.module';
import {LocalStrategy} from './passport/local.strategy';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';
import {jwtConstants} from './constants';

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
        }),
    ],
    providers: [AuthService, JwtStrategy, LocalStrategy],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {
    // public configure(user: MiddlewareConsumer) {
    //     user
    //         .apply(passport.authenticate('jwt', {session: true}))
    //         .forRoutes(
    //             {
    //                 path: 'about',
    //                 method: RequestMethod.ALL,
    //             },
    //             {
    //                 path: 'about/*',
    //                 method: RequestMethod.ALL,
    //             });
    // }
}
