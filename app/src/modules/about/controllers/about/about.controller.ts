import {Controller, Get, Render} from '@nestjs/common';
import {Crud, CrudController} from '@nestjsx/crud';
import {AboutService} from '../../services/about/about.service';

@Controller()
export class AboutController  {
    constructor(public service: AboutService) {

    }
    @Get()
    @Render('about')
    root() {
        return {title: 'about Page'};
    }
}
