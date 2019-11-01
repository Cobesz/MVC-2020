import {Controller, Get, Request , Render, UseGuards} from '@nestjs/common';
import {AboutService} from '../services/about.service';
import {AuthGuard} from '@nestjs/passport';

@Controller()
export class AboutController  {
    constructor(public service: AboutService) {

    }

    
    @Get()
    @UseGuards(AuthGuard('jwt')) // protected route
    getProfile(@Request() req) {
        return req.user;
    }
}
