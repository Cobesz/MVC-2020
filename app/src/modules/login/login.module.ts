import {HttpModule, HttpService, Module} from '@nestjs/common';
import {LoginService} from './services/login.service';

import {LoginController} from './controllers/login.controller';

@Module({
    imports: [HttpModule],
    controllers: [LoginController],
    providers: [LoginService],
})
export class LoginModule {
}
