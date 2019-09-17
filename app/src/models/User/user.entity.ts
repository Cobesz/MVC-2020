import {Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        field: 'ID',
    })
    id: number;

    @Column
    firstName: string;

    @Column
    middleName: string;

    @Column
    lastName: string;

    @Column({
        unique: true,
        field: 'email',
    })
    email: string;

    @Column
    password: string;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedOn: Date;

    @DeletedAt
    deletionDate: Date;
}
