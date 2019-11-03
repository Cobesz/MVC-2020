import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {WishList} from '../../wishlists/entities/wishlist.entity';
import {IsBoolean, IsEmail, IsInt, IsString} from 'class-validator';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @IsString({ always: true }) // validator
    @Column({unique: false})
    firstName: string;

    @IsString({ always: true }) // validator
    @Column({unique: false})
    middleName: string;

    @IsString() // validator
    @Column({nullable: false})
    lastName: string;

    @IsEmail() // validator
    @Column({nullable: true})
    email: string;

    @Column({length: 100, nullable: true})
    password: string | undefined;

    @Column({length: 100, nullable: true})
    passwordHash: string | undefined;

    @IsBoolean() // validator
    @Column({unique: false})
    admin: boolean;

    @OneToMany(type => WishList, wishlist => wishlist.user)
    wishlists: WishList[];
}
