import {Injectable, HttpService} from '@nestjs/common';
import {TypeOrmCrudService} from '@nestjsx/crud-typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Game} from '../entities/game.entity';
import { map } from 'rxjs/operators';

@Injectable()
export class GamesService extends TypeOrmCrudService<Game> {
    constructor(@InjectRepository(Game) gamesRepository: Repository<Game>,
                public http: HttpService) {
        super(gamesRepository);
    }

    public getAllGames() {
        return this.http.get('https://opencritic.com/api/game')
            .pipe(
                map(response => response.data),
            );
    }

    public getSingleGame(id) {
        return this.http.get('https://opencritic.com/api/game/' + id)
            .pipe(
                map(response => response.data),
            );
    }
}
