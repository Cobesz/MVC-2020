import {Controller, Get, Request, Render, UseGuards, Logger, Session, Response} from '@nestjs/common';
import {AdminService} from '../services/admin.service';
import {AuthGuard} from '@nestjs/passport';
import * as jwt from 'jsonwebtoken';

@Controller()
export class AdminController {
    constructor(public service: AdminService) {

    }

    @Get()
    @UseGuards(AuthGuard('jwt')) // protected route
    @Render('admin')
    root(@Response() res, @Session() session) {

        const decoded: any = jwt.decode(session.jwtToken);

        if (decoded.isAdmin) {
            return {
                title: 'admin Page',
                user: decoded.name,
            };
        } else {
            res.redirect('/');
        }

    }
}
