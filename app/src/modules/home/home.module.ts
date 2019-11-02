import {HttpModule, HttpService, Module} from '@nestjs/common';
import {HomeService} from './services/home/home.service';

import {HomeController} from './controllers/home/home.controller';
import {AuthModule} from '../../core/auth/auth.module';
import {JwtModule} from '@nestjs/jwt';
import {jwtConstants} from '../../core/auth/constants';

@Module({
    imports: [HttpModule, AuthModule, JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: {expiresIn: '60s'},
    })],
    controllers: [HomeController],
    providers: [HomeService],
})
export class HomeModule {
}
