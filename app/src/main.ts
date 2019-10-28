import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path';
import hbs = require('hbs');
import * as sassMiddleware from 'node-sass-middleware';
import * as helmet from 'helmet';

import * as passport from 'passport';
import flash = require('connect-flash');
import session = require('express-session');

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.useStaticAssets(join(__dirname, '..', 'src/public'));
    app.setBaseViewsDir(join(__dirname, '..', 'src/views'));
    app.setViewEngine('hbs');

    // Security
    app.use(helmet()); // Helmet is a collection of 14 smaller middleware functions that set HTTP response headers -> Clickjacking, Minor XSS, HSTS etc.

    hbs.registerPartials(join(__dirname, '..', 'src/views', 'partials'));

    app.use(session({
        secret: 'wateenmooiesecret',
        resave: false,
        saveUninitialized: false,
    }));

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());

    await app.listen(3000);

}

bootstrap();
