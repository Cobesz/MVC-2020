import {Module} from '@nestjs/common';
import {AdminService} from './services/admin.service';
import {TypeOrmModule} from '@nestjs/typeorm';

import {AdminController} from './controllers/admin.controller';

@Module({
    controllers: [AdminController],
    providers: [AdminService],
})
export class AdminModule {
}
