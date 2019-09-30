import {Controller, Get, Render} from '@nestjs/common';
import {Crud, CrudController} from '@nestjsx/crud';
import {Game} from '../../entities/game.entity';
import {GamesService} from '../../services/games/games.service';

@Crud({
    model: {
        type: Game,
    },
})
@Controller()
export class GamesController implements CrudController<Game> {
    constructor(public service: GamesService) {
    }
}
