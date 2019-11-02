import {Injectable, Logger} from '@nestjs/common';
import {TypeOrmCrudService} from '@nestjsx/crud-typeorm';
import {User} from '../entities/user.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService extends TypeOrmCrudService<User> {

    private saltRounds = 10;

    private usersRepository: Repository<User>;

    constructor(@InjectRepository(User) usersRepository: Repository<User>) {
        super(usersRepository);
        this.usersRepository = usersRepository;
    }

    async getUsers(): Promise<User[]> {

        return await this.usersRepository.find();
    }

    async getUserByUsername(email: string): Promise<User> {
        return (await this.usersRepository.find({email}))[0];
    }

    async createUser(user: User): Promise<User> {
        user.passwordHash = await this.getHash(user.password);

        // clear password as we don't persist passwords
        user.password = undefined;
        return this.usersRepository.save(user);
    }

    async getHash(password: string | undefined): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
    }

    async compareHash(password: string | undefined, hash: string | undefined): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }

}
