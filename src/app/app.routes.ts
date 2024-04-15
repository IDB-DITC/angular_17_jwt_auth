import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },

  { path: '', redirectTo: "home", pathMatch: "full" },

  { path: 'login', component: LoginComponent },

];
