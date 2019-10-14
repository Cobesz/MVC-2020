import * as passport from 'passport';
import {MiddlewareConsumer, Module, RequestMethod,} from '@nestjs/common';
import {AuthService} from './auth.service';
import {JwtStrategy} from './passport/jwt.strategy';
import {AuthController} from './auth.controller';
import {UsersModule} from '../../modules/users/users.module';

@Module({
    imports: [UsersModule],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {
    public configure(user: MiddlewareConsumer) {
        user
            .apply(passport.authenticate('jwt', {session: false}))
            .forRoutes(
                {
                    path: 'profile',
                    method: RequestMethod.ALL,
                },
                {
                    path: 'profile/*',
                    method: RequestMethod.ALL,
                })
        ;
    }
}
