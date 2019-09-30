import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {GamesController} from './controllers/games.controller';
import {GamesService} from './services/games.service';
import {Game} from './entities/game.entity';

@Module({
    controllers: [GamesController],
    providers: [GamesService],
    imports: [
        TypeOrmModule.forFeature([Game]),
    ],
})
export class GamesModule {
}
