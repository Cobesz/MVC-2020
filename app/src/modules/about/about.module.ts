import {Module} from '@nestjs/common';
import {AboutService} from './services/about/about.service';
import {TypeOrmModule} from '@nestjs/typeorm';

import {AboutController} from './controllers/about/about.controller';

@Module({
    controllers: [AboutController],
    providers: [AboutService],
})
export class AboutModule {
}
