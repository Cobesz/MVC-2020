import {Controller, Get, Logger, Render} from '@nestjs/common';
import {Crud, CrudController} from '@nestjsx/crud';
import {HomeService} from '../../services/home/home.service';

@Controller()

export class HomeController {

    private readonly logger = new Logger(HomeController.name);

    private platforms = [];

    constructor(public service: HomeService) {

        this.getPlatforms();
    }

    getPlatforms() {
        this.service.getPlatforms().subscribe((res) => {

            for (const platform of res) {
                this.platforms.push(platform);
            }
            this.logger.log(this.platforms);
        }, error => this.logger.error(error));
    }

    @Get()
    @Render('home')
    root() {

        return {
            title: 'The most amazing, flabbergasting and honestly best gaming wish list',
            platforms: this.platforms,
        };
    }
}
