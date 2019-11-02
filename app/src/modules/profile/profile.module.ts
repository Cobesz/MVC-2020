import {Module} from '@nestjs/common';
import {ProfileService} from './services/profile.service';
import {TypeOrmModule} from '@nestjs/typeorm';

import {ProfileController} from './controllers/profile.controller';

@Module({
    controllers: [ProfileController],
    providers: [ProfileService],
})
export class ProfileModule {
}
