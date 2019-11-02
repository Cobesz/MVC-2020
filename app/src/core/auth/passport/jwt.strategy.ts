import * as passport from 'passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {Injectable, Logger} from '@nestjs/common';
import {AuthService} from '../auth.service';
import {PassportStrategy} from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super(
            {
                jwtFromRequest: request => request.session.jwtToken, // getting the token in the session.
                secretOrKey: 'secret',
            },
        );
        passport.use(this);
    }

    async validate(payload: any) {
        return {userId: payload.sub, username: payload.username};
    }
}
