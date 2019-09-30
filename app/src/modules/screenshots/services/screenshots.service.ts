import {Injectable} from '@nestjs/common';
import {TypeOrmCrudService} from '@nestjsx/crud-typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Screenshot} from '../entities/screenshot.entity';

@Injectable()
export class ScreenshotsService extends TypeOrmCrudService<Screenshot> {
    constructor(@InjectRepository(Screenshot) screenshotRepository: Repository<Screenshot>) {
        super(screenshotRepository);
    }
}
