import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId} from 'typeorm';
import {User} from './user.entity';
import {Game} from './game.entity';

@Entity()
export class WishList {
    @PrimaryGeneratedColumn()
    id: string;
    @Column({unique: false})
    name: string;
    @Column()
    userId: number;
    @ManyToOne(type => User, user => user.wishlists, { nullable: false })
    user: User;
    @OneToMany(type => Game, game => game.wishList)
    games: Game[];
}
