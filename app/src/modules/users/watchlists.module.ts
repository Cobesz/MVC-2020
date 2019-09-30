import {Module} from '@nestjs/common';
import {UsersService} from './services/users/users.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './entities/user.entity';
import {UsersController} from './controllers/users/users.controller';
import {WatchlistsController} from './controllers/watchlists/watchlists.controller';
import {WatchlistsService} from './services/watchlists/watchlists.service';
import {WatchList} from './entities/watchlist.entity';

@Module({
    controllers: [WatchlistsController],
    providers: [WatchlistsService],
    imports: [
        TypeOrmModule.forFeature([WatchList]),
    ],
})
export class WatchlistsModule {
}
