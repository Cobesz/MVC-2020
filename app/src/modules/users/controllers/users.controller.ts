import {Controller, Get, Render} from '@nestjs/common';
import {Crud, CrudController} from '@nestjsx/crud';
import {User} from '../entities/user.entity';
import {UsersService} from '../services/users.service';

@Crud({
    model: {
        type: User,
    },
})
@Controller()
// export class UsersController implements CrudController<User> {
export class UsersController {
    constructor(public service: UsersService) {

    }
}
