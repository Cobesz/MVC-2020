import {Controller, Get, Render} from '@nestjs/common';
import {Crud, CrudController} from '@nestjsx/crud';
import {WatchList} from '../../entities/watchlist.entity';
import {WatchlistsService} from '../../services/watchlists/watchlists.service';

@Crud({
    model: {
        type: WatchList,
    },
})
@Controller()
export class WatchlistsController implements CrudController<WatchList> {
    constructor(public service: WatchlistsService) {



    }
}
