import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {WishList} from '../../wishlists/entities/wishlist.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique: false})
    firstName: string;
    @Column({unique: false})
    middleName: string;
    @Column({nullable: false})
    lastName: string;
    @Column({nullable: true})
    email: string;
    @Column({ length: 100, nullable: true })
    password: string|undefined;
    @Column({ length: 100, nullable: true })
    passwordHash: string|undefined;
    @OneToMany(type => WishList, wishlist => wishlist.user)
    wishlists: WishList[];
}
