import {Controller, Get, Render, UseGuards} from '@nestjs/common';
import {Crud, CrudController} from '@nestjsx/crud';
import {User} from '../entities/user.entity';
import {UsersService} from '../services/users.service';
import {AuthGuard} from '@nestjs/passport';

@Crud({
    model: {
        type: User,
    },
})

@UseGuards(AuthGuard('jwt')) // protected route
@Controller()
// export class UsersController implements CrudController<User> {
export class UsersController {
    constructor(public service: UsersService) {

    }

    private addGames () {
    }
}
