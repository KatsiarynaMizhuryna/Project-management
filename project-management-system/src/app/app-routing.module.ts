import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainRouteComponent } from "./main-route/main-route.component";
import { AuthGuard } from "./_helpers/auth.guard";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import {ProfileComponent} from "./profile/profile.component";
import {BoardComponent} from "./board/board.component";


const accountModule = () => import('./auth/account.module').then(x => x.AccountModule);

const routes: Routes = [
  { path: '', component: MainRouteComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: accountModule },
  { path: 'welcome-page', component: WelcomePageComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'board', component: BoardComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
