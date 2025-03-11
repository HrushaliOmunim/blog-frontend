import { Routes } from '@angular/router';
import { UserComponent } from './list/user/user.component';
import { SingleUserComponent } from './list/single-user/single-user.component';

export const routes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'singleUser',
        component: SingleUserComponent
    }
];
