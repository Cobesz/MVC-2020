import {Module} from '@nestjs/common';
import {HomeService} from './services/home/home.service';
import {TypeOrmModule} from '@nestjs/typeorm';

import {HomeController} from './controllers/home/home.controller';

@Module({
    controllers: [HomeController],
    providers: [HomeService],
})
export class HomeModule {
}
