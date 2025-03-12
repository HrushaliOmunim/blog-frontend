import { Routes } from '@angular/router';
import { UserComponent } from './list/user/user.component';
import { SingleUserComponent } from './list/single-user/single-user.component';
import { FormComponent } from './list/form/form.component';

export const routes: Routes = [
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'singleUser',
        component: SingleUserComponent
    },
    {
        path:'form',
        component: FormComponent
    }
];
