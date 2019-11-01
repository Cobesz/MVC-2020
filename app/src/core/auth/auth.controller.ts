import {Controller, Logger, Post, UseGuards, Request} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {AuthService} from './auth.service';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @UseGuards(AuthGuard('local'))
    @Post()
    async login(@Request() req) {
        return this.authService.login(req.user).then(res => {
            Logger.log(res.access_token);
        });
    }
}
