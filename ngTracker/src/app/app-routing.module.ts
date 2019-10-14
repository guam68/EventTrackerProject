import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatchListComponent } from './components/catch-list/catch-list.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full',  redirectTo: 'catches'},
  { path: 'catches', component: CatchListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
