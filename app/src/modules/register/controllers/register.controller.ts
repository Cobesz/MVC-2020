import {Controller, Get, Logger, Render} from '@nestjs/common';
import {RegisterService} from '../services/register.service';

@Controller()

export class RegisterController {

    private readonly logger = new Logger(RegisterController.name);

    constructor(public service: RegisterService) {

    }

    @Get()
    @Render('register')
    root() {

        return {
            title: 'Sign up',

        };
    }
}
