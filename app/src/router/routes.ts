import {Routes} from 'nest-router';
import {HomeModule} from '../modules/home/home.module';
import {UsersModule} from '../modules/users/users.module';
import {AboutModule} from '../modules/about/about.module';
import {WishlistsModule} from '../modules/wishlists/wishlists.module';
import {GamesModule} from '../modules/games/games.module';
import {ScreenshotsModule} from '../modules/screenshots/screenshots.module';
import {TrailersModule} from '../modules/trailers/trailers.module';
import {PlatformsModule} from '../modules/platforms/platforms.module';

export const routes: Routes = [
    {
        path: '/',
        module: HomeModule,
    },
    {
        path: '/about',
        module: AboutModule,
    },
    {
        path: '/users',
        module: UsersModule,
    },
    {
        path: '/wishlists',
        module: WishlistsModule,
    },
    {
        path: '/games',
        module: GamesModule,
    },
    {
        path: '/screenshots',
        module: ScreenshotsModule,
    },
    {
        path: '/trailers',
        module: TrailersModule,
    },
    {
        path: '/platforms',
        module: PlatformsModule,
        children: [
            {
                path: '/:name',
                module: PlatformsModule,
            }],
    },
];
