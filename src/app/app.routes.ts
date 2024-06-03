import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SinginComponent } from './singin/singin.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'signin', component: SinginComponent },
  { path: 'products/:id', component: UserDetailsComponent },
  { path: 'singup', component: SinginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
