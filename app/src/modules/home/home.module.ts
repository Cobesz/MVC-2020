import {HttpModule, HttpService, Module} from '@nestjs/common';
import {HomeService} from './services/home/home.service';

import {HomeController} from './controllers/home/home.controller';
import {AuthModule} from '../../core/auth/auth.module';

@Module({
    imports: [HttpModule, AuthModule],
    controllers: [HomeController],
    providers: [HomeService],
})
export class HomeModule {
}
