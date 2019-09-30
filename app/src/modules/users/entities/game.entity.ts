import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId} from 'typeorm';
import {User} from './user.entity';
import {WishList} from "./wishlist.entity";

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
}
