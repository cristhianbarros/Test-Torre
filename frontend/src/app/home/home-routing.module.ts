import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  { path: '',
    component: HomeComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] },
      { path: 'people', loadChildren: './people/people.module#PeopleModule', canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
