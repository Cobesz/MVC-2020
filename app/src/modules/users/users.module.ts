import {Module} from '@nestjs/common';
import {UsersService} from './services/users/users.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './entities/user.entity';
import {UsersController} from './controllers/users/users.controller';

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        TypeOrmModule.forFeature([User]),
    ],
})
export class UsersModule {
}
