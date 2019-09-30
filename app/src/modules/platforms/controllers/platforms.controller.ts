import {Controller, Get, Render} from '@nestjs/common';
import {Crud, CrudController} from '@nestjsx/crud';
import {Platform} from '../entities/platform.entity';
import {PlatformsService} from '../services/platforms.service';

@Crud({
    model: {
        type: Platform,
    },
})
@Controller()
export class PlatformsController implements CrudController<Platform> {
    constructor(public service: PlatformsService) {

    }
}
