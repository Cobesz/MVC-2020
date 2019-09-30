import {Controller, Get, Render} from '@nestjs/common';
import {AboutService} from '../services/about.service';

@Controller()
export class AboutController  {
    constructor(public service: AboutService) {

    }
    @Get()
    @Render('about')
    root() {
        return {title: 'About Page'};
    }
}
