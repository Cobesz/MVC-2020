import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TrailersController} from './controllers/trailers.controller';
import {TrailersService} from './services/trailers.service';
import {Trailer} from './entities/trailer.entity';

@Module({
    controllers: [TrailersController],
    providers: [TrailersService],
    imports: [
        TypeOrmModule.forFeature([Trailer]),
    ],
})
export class TrailersModule {
}
