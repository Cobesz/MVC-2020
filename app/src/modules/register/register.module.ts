import {HttpModule, HttpService, Module} from '@nestjs/common';
import {RegisterService} from './services/register.service';

import {RegisterController} from './controllers/register.controller';

@Module({
    imports: [HttpModule],
    controllers: [RegisterController],
    providers: [RegisterService],
})
export class RegisterModule {
}
