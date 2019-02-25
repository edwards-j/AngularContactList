import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

export const AppRoutes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'new', component: NewUserComponent },
  { path: ':userId', component: DetailsComponent },
  { path: ':userId/edit', component: EditUserComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];
