import {Controller, Get, Render} from '@nestjs/common';
import {Crud, CrudController} from '@nestjsx/crud';
import {Screenshot} from '../entities/screenshot.entity';
import {ScreenshotsService} from '../services/screenshots.service';

@Crud({
    model: {
        type: Screenshot,
    },
})
@Controller()
export class ScreenshotsController implements CrudController<Screenshot> {
    constructor(public service: ScreenshotsService) {

    }
}
