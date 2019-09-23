import {Controller, Get, Render} from '@nestjs/common';
import {Crud, CrudController} from '@nestjsx/crud';
import {HomeService} from '../../services/home/home.service';

@Controller()
export class HomeController {
    constructor(public service: HomeService) {

    }

    @Get()
    @Render('home')
    root() {
        return {title: 'Home Page'};
    }
}
