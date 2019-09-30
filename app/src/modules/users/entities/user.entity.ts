import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {WishList} from './wishlist.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;
    @Column({unique: false})
    firstName: string;
    @Column({unique: false})
    middleName: string;
    @Column({nullable: false})
    lastName: string;
    @Column({nullable: true})
    email: string;
    @Column({nullable: false})
    password: string; // TODO: hash this
    @OneToMany(type => WishList, wishlist => wishlist.user)
    wishlists: WishList[];
}
