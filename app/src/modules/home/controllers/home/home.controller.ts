import {Controller, Get, Logger, Render, Response, Session, UseGuards} from '@nestjs/common';
import {Crud, CrudController} from '@nestjsx/crud';
import {HomeService} from '../../services/home/home.service';
import * as jwt from 'jsonwebtoken';


@Controller()

export class HomeController {

    private readonly logger = new Logger(HomeController.name);

    private platforms = [];

    private games = [];


    constructor(public service: HomeService) {

        this.getPlatforms();
        this.getGames();
    }

    private getPlatforms() {
        this.service.getPlatforms().subscribe((platforms) => {

            for (const platform of platforms) {
                this.platforms.push(platform);
            }
        }, error => this.logger.error(error));
    }

    private getGames() {
        this.service.getAllGames().subscribe((games) => {


            for (const game of games) {
                // get gameInfo
                this.service.getSingleGame(game.id).subscribe((info) => {
                    game.extraInfo = info;
                    this.games.push(game);
                    // this.logger.log(game.extraInfo);
                }, error => this.logger.error(error));

            }

        }, error => this.logger.error(error));
    }

    private getSingleGame(id) {

    }

    @Get()
    @Render('home')
    root(@Session() session) {


        if (session.jwtToken) {
            const decoded: any = jwt.decode(session.jwtToken);
            Logger.log(decoded.name);

            return {
                title: 'The most amazing, flabbergasting and honestly best gaming wish list',
                platforms: this.platforms,
                games: this.games,
                user: {
                    firstName: decoded.name,
                    isAdmin: decoded.isAdmin,
                },

            };
        } else {
            return {
                title: 'The most amazing, flabbergasting and honestly best gaming wish list',
                platforms: this.platforms,
            };
        }
    }
}
