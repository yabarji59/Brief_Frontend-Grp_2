import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'user/:username', component: UserDetailComponent },
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: 'user', redirectTo: '/user-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
