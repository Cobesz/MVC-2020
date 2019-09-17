import {Table, Column, Model} from 'sequelize-typescript';

@Table
export class Worklist extends Model<Worklist> {
    @Column
    id: number;

    @Column
    name: string;
}
