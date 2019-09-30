import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId} from 'typeorm';
import {Game} from '../../games/entities/game.entity';

@Entity()
export class Platform {
    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    shortName: string;
    @Column()
    imageSrc: string;
    @Column()
    releaseDate: Date;
    @Column()
    gameId: number;
    @ManyToOne(type => Game, game => game.platforms, {nullable: false})
    game: Game;
}
