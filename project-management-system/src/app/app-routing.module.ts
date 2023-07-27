import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainRouteComponent } from "./main-route/main-route.component";
import { AuthGuard } from "./_helpers/auth.guard";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { ProfileComponent } from "./profile/profile.component";
import { BoardComponent } from "./board/board.component";
import { BoardCardComponent } from "./board-page/board-card/board-card.component";
import { BoardEditComponent} from "./board/board-edit.component";

const accountModule = () => import('./auth/account.module').then(x => x.AccountModule);

const routes: Routes = [
  { path: '', component: MainRouteComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: accountModule },
  { path: 'welcome-page', component: WelcomePageComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'boards/add', component: BoardComponent, canActivate: [AuthGuard] },
  { path: 'boards/edit/:id', component: BoardEditComponent, canActivate: [AuthGuard] },
  { path: 'boards/edit/:id/:columnId', component: BoardEditComponent, canActivate: [AuthGuard] },
  { path: 'board-card', component: BoardCardComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
