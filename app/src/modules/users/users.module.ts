import {Module} from '@nestjs/common';
import {UsersService} from './services/users.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './entities/user.entity';
import {UsersController} from './controllers/users.controller';

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        TypeOrmModule.forFeature([User]),
    ],
    exports: [UsersService],
})
export class UsersModule {
}
