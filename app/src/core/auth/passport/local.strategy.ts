import {Strategy} from 'passport-local';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable, Logger} from '@nestjs/common';
import {AuthService} from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    public async validate(req, payload, done) {
        const isValid = await this.authService.validateUser(payload);
        if (!isValid) {
            return done('Unauthorized', false);
        }
        done(null, isValid);
    }
}
