import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId} from 'typeorm';
import {Game} from '../../games/entities/game.entity';

@Entity()
export class Screenshot {
    @PrimaryGeneratedColumn()
    id: string;
    @Column({unique: false})
    fullRes: string;
    @Column()
    thumbnail: string;
    @Column()
    gameId: number;
    @ManyToOne(type => Game, game => game.screenshots)
    game: Game;
}
