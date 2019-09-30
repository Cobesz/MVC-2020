import {Controller, Get, Render} from '@nestjs/common';
import {Crud, CrudController} from '@nestjsx/crud';
import {Trailer} from '../entities/trailer.entity';
import {TrailersService} from '../services/trailers.service';

@Crud({
    model: {
        type: Trailer,
    },
})
@Controller()
export class TrailersController implements CrudController<Trailer> {
    constructor(public service: TrailersService) {

    }
}
