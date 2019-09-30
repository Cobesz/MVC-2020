import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId} from 'typeorm';
import {WishList} from '../../wishlists/entities/wishlist.entity';
import {Screenshot} from '../../screenshots/entities/screenshot.entity';
import {Trailer} from '../../trailers/entities/trailer.entity';
import {Platform} from '../../platforms/entities/platform.entity';

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: string;
    @Column({unique: false})
    name: string;
    @Column({unique: false})
    description: string;
    @Column({unique: false})
    price: string;
    @Column({unique: false})
    releaseDate: Date;
    @Column()
    score: number;
    @Column()
    wishListId: number;
    @ManyToOne(type => WishList, wishList => wishList.games, { nullable: false })
    wishList: WishList;
    @OneToMany(type => Screenshot, screenshot => screenshot.game)
    screenshots: Screenshot[];
    @OneToMany(type => Trailer, trailer => trailer.game)
    trailers: Trailer[];
    @OneToMany(type => Platform, platform => platform.game)
    platforms: Platform[];
}
