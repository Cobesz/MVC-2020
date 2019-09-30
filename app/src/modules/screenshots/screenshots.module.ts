import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ScreenshotsController} from './controllers/screenshots.controller';
import {ScreenshotsService} from './services/screenshots.service';
import {Screenshot} from './entities/screenshot.entity';

@Module({
    controllers: [ScreenshotsController],
    providers: [ScreenshotsService],
    imports: [
        TypeOrmModule.forFeature([Screenshot]),
    ],
})
export class ScreenshotsModule {
}
