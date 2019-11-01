import {Controller, Get, Logger, Render} from '@nestjs/common';
import {LoginService} from '../services/login.service';

@Controller()

export class LoginController {

    private readonly logger = new Logger(LoginController.name);

    constructor(public service: LoginService) {

    }

    @Get()
    @Render('login')
    root() {

        return {
            title: 'Login',
        };
    }
}
