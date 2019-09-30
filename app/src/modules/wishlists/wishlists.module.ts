import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {WishlistsController} from './controllers/wishlists/wishlists.controller';
import {WishlistsService} from './services/wishlists.service';
import {WishList} from './entities/wishlist.entity';

@Module({
    controllers: [WishlistsController],
    providers: [WishlistsService],
    imports: [
        TypeOrmModule.forFeature([WishList]),
    ],
})
export class WishlistsModule {
}
