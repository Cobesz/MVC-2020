import {Injectable} from '@nestjs/common';
import {TypeOrmCrudService} from '@nestjsx/crud-typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {WishList} from '../../entities/wishlist.entity';

@Injectable()
export class WishlistsService extends TypeOrmCrudService<WishList> {
    constructor(@InjectRepository(WishList) wishlistRepository: Repository<WishList>) {
        super(wishlistRepository);
    }
}
