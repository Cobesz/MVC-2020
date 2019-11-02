import {Controller, Get, Request, Render, UseGuards, Logger, Session} from '@nestjs/common';
import {AboutService} from '../services/about.service';
import {AuthGuard} from '@nestjs/passport';

@Controller()
export class AboutController {
    constructor(public service: AboutService) {

    }

    @Get()
    @UseGuards(AuthGuard('jwt')) // protected route
    @Render('about')
    root(@Session() session) {
        return {
            title: 'About Page',
            user: session.userFirstName,
        };
    }
}
