import { Controller, Post, HttpStatus, HttpCode, Get, Response, Body, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../../modules/users/services/users.service';
import { User } from '../../modules/users/entities/user.entity';

@Controller()
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UsersService) {}

    @Post()
    async loginUser(@Response() res: any, @Request() req, @Body() body: User) {
        if (!(body && body.email && body.password)) {
            return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username and password are required!' });
        }

        const user = await this.userService.getUserByUsername(body.email);

        if (user) {
            if (await this.userService.compareHash(body.password, user.passwordHash)) {

                return res.status(HttpStatus.OK).json(await this.authService.createToken(user.id, user.email).then((data) => {
                    req.session.jwtToken = data.token; // setting the token in the session
                    res.redirect('/');
                }));
            }
        }

        return res.status(HttpStatus.FORBIDDEN).json({ message: 'Email or password wrong!' });
    }

    @UseGuards(AuthGuard('local'))
    @Post()
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}
