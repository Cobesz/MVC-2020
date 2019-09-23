import {Routes} from 'nest-router';
import {HomeModule} from '../modules/home/home.module';
import {UsersModule} from '../modules/users/users.module';

export let routes: Routes = [
    {
        path: '/',
        module: HomeModule,
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
];
