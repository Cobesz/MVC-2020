import {Controller, Get, Render} from '@nestjs/common';
import {Crud, CrudController} from '@nestjsx/crud';

import {WishlistsService} from '../../services/wishlists.service';
import {WishList} from '../../entities/wishlist.entity';

@Crud({
    model: {
        type: WishList,
    },
})
@Controller()
export class WishlistsController implements CrudController<WishList> {
    constructor(public service: WishlistsService) {

    }
}
