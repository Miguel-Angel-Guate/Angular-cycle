import { ROUTES } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';

import { EditUserComponent } from './edit-user/edit-user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

export const USER_ROUTES: Routes = [
  { path: 'new', component: NewUserComponent },
  { path: 'edit', component: EditUserComponent },
  { path: 'detail', component: UserDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'new' },
];
