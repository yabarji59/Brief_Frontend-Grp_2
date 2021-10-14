import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsercardComponent } from './usercard/usercard.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  { path: 'users', component: UsercardComponent },
  { path: 'user/:user.login.username', component: UserdetailsComponent},
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
