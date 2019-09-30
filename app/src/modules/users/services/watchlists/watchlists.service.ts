import {Injectable} from '@nestjs/common';
import {TypeOrmCrudService} from '@nestjsx/crud-typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {WatchList} from '../../entities/watchlist.entity';

@Injectable()
export class WatchlistsService extends TypeOrmCrudService<WatchList> {
    constructor(@InjectRepository(WatchList) watchlistsRepository: Repository<WatchList>) {
        super(watchlistsRepository);
    }
}
