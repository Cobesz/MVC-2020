import {Injectable} from '@nestjs/common';
import {TypeOrmCrudService} from '@nestjsx/crud-typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Game} from '../../entities/game.entity';

@Injectable()
export class GamesService extends TypeOrmCrudService<Game> {
    constructor(@InjectRepository(Game) gamesRepository: Repository<Game>) {
        super(gamesRepository);
    }
}
