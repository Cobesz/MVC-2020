import * as passport from 'passport';
import {
    Module,
    NestModule,
    MiddlewareConsumer,
    RequestMethod,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './passport/jwt.strategy';
import { AuthController } from './auth.controller';
import { UsersModule } from '../../modules/users/users.module';
import {UsersService} from '../../modules/users/services/users.service';

@Module({
    imports: [UsersModule],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(passport.authenticate('jwt', { session: false }))
            .forRoutes(
                { path: '/products', method: RequestMethod.ALL },
                { path: '/products/*', method: RequestMethod.ALL });
    }
}
