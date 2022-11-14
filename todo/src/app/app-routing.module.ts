import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletatiPage } from './completati/completati.page';
import { TodosPage } from './todos/todos.page';

const routes: Routes = [
{
  path:'todos.page',
  component:TodosPage
},
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'todos.page'
},
{
  path:'completati.page',
  component:CompletatiPage
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
