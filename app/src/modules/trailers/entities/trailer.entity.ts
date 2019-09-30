import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId} from 'typeorm';
import {Game} from '../../games/entities/game.entity';

@Entity()
export class Trailer {
    @PrimaryGeneratedColumn()
    id: string;
    @Column({unique: false})
    title: string;
    @Column()
    format: string;
    @Column()
    videoId: string;
    @Column()
    channelId: string;
    @Column({ length: '2000' })
    description: string;
    @Column()
    externalUrl: string;
    @Column()
    channelTitle: string;
    @Column()
    publishedDate: Date;
    @Column()
    gameId: number;
    @ManyToOne(type => Game, game => game.trailers, {nullable: false})
    game: Game;
}
