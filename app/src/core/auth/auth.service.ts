import * as jwt from 'jsonwebtoken';
import {Body, HttpStatus, Injectable, Response} from '@nestjs/common';
import {UsersService} from '../../modules/users/services/users.service';
import {User} from '../../modules/users/entities/user.entity';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService,
                private readonly jwtService: JwtService) {
    }

    async createToken(currentUser) {
        const expiresIn = 60 * 60;
        const secretOrKey = 'secret';
        const user = {
            userId: currentUser.id,
            email: currentUser.email,
            name: currentUser.firstName,
            isAdmin: currentUser.admin,
        };
        const token = jwt.sign(user, secretOrKey, {expiresIn});

        return {expires_in: expiresIn, token};
    }
}
