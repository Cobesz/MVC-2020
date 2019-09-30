import {Injectable} from '@nestjs/common';
import {TypeOrmCrudService} from '@nestjsx/crud-typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Platform} from '../entities/platform.entity';

@Injectable()
export class PlatformsService extends TypeOrmCrudService<Platform> {
    constructor(@InjectRepository(Platform) platformRepository: Repository<Platform>) {
        super(platformRepository);
    }
}
