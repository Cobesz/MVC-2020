import {Controller, Get, Render, UseGuards} from '@nestjs/common';
import {AboutService} from '../services/about.service';
import {AuthGuard} from "@nestjs/passport";

@Controller()
export class AboutController  {
    constructor(public service: AboutService) {

    }


    @UseGuards(AuthGuard('jwt'))
    @Get()
    @Render('about')
    root() {
        return {title: 'About Page'};
    }
}
