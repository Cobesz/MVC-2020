import { Injectable, Inject} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @Inject('USERS_REPOSITORY') private readonly USERS_REPOSITORY: typeof User,
    ) {}

    async findAll(): Promise<User[]> {
        return this.USERS_REPOSITORY.findAll<User>();
    }

    async findById(id: number): Promise<User> {
        return this.USERS_REPOSITORY.findById(id);
    }
    async create(createUserDto: CreateUserDto): Promise<User> {
        return this.USERS_REPOSITORY.create<User>(createUserDto);
    }

    async update(id: number, newValue: CreateUserDto): Promise<User | null> {

        let todo = await this.USERS_REPOSITORY.findByPk<User>(id);

        if (!todo.id) {
            // tslint:disable-next-line:no-console
            console.error('user doesn\'t exist');
        }

        todo = this._assign(user, newValue);

        return await user.save({ returning: true });
    }

    public async delete(ID: number): Promise<number> {

        return this.USERS_REPOSITORY.destroy({
            where: {ID},
        });
    }

    private _assign(user: CreateUserDto, newValue: CreateUserDto): User {
        // tslint:disable-next-line:no-string-literal
        for (const key of Object.keys(user['dataValues'])) {
            if (todo[key] !== newValue[key]) {
                //
                todo[key] = newValue[key];
            }
        }
        return user as User;
    }
}
