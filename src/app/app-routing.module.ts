import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  //   component: Login
  // },
  {
    path:'dashboard',
    component: ContainerComponent
  },
  {
    path:'example1',
    component: Example1Component
  },
  {
    path:'example2',
    component: Example2Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContainerComponent, Example1Component, Example2Component]
