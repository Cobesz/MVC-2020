import {Controller, Get, Request, Render, UseGuards, Logger, Response, Session} from '@nestjs/common';
import {ProfileService} from '../services/profile.service';
import {AuthGuard} from '@nestjs/passport';
import * as jwt from 'jsonwebtoken';

@Controller()
export class ProfileController {
    constructor(public service: ProfileService) {

    }

    @Get()
    @UseGuards(AuthGuard('jwt')) // protected route
    @Render('profile')
    root(@Response() res, @Session() session) {


        if (session.jwtToken) {
            const decoded: any = jwt.decode(session.jwtToken);

            return {
                title: 'Profile Page',
                user: {
                    firstName: decoded.name,
                    isAdmin: decoded.isAdmin,
                },
            };
        } else {
            res.redirect('/');
        }
    }
}
