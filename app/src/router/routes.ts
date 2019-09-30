import {Routes} from 'nest-router';
import {HomeModule} from '../modules/home/home.module';
import {UsersModule} from '../modules/users/users.module';
import {AboutModule} from '../modules/about/about.module';
import {WatchlistsModule} from "../modules/users/watchlists.module";

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
        // children: [
        //     {
        // path: '/cats',
        // module: CatsModule,
        // },
        // {
        // path: '/dogs',
        // module: DogsModule,
        //     },
        // ],
    },
    {
        path: '/watchlists',
        module: WatchlistsModule,
        // children: [
        //     {
        // path: '/cats',
        // module: CatsModule,
        // },
        // {
        // path: '/dogs',
        // module: DogsModule,
        //     },
        // ],
    },
];
