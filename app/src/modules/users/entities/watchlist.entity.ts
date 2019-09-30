import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId} from 'typeorm';
import {User} from './user.entity';

@Entity()
export class WatchList {
    @PrimaryGeneratedColumn()
    id: string;
    @Column({unique: false})
    name: string;
    @Column()
    userId: number;
    @ManyToOne(type => User, user => user.watchlists, { nullable: false })
    user: User;
}
