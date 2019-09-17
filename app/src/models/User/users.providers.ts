import {User} from './user.entity';

export const USERS_REPOSITORY = [
    {
        provide: 'USERS_REPOSITORY',
        useValue: User,
    },
];
