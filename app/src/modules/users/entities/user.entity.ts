import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

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
}
