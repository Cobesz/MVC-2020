import {HttpModule, HttpService, Module} from '@nestjs/common';
import {HomeService} from './services/home/home.service';

import {HomeController} from './controllers/home/home.controller';

@Module({
    imports: [HttpModule],
    controllers: [HomeController],
    providers: [HomeService],
})
export class HomeModule {
}
