import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'reposList', component: RepoListComponent},
  {path: 'repoDetail', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
