import {Injectable} from '@nestjs/common';
import {TypeOrmCrudService} from '@nestjsx/crud-typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Trailer} from '../entities/trailer.entity';

@Injectable()
export class TrailersService extends TypeOrmCrudService<Trailer> {
    constructor(@InjectRepository(Trailer) trailerRepository: Repository<Trailer>) {
        super(trailerRepository);
    }
}
