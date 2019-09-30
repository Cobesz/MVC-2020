import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PlatformsController} from './controllers/platforms.controller';
import {PlatformsService} from './services/platforms.service';
import {Platform} from './entities/platform.entity';

@Module({
    controllers: [PlatformsController],
    providers: [PlatformsService],
    imports: [
        TypeOrmModule.forFeature([Platform]),
    ],
})
export class PlatformsModule {
}
