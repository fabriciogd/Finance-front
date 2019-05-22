import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './layouts/content/content.component';

const routes: Routes = [{
  path: '',
  component: ContentComponent,
  children: [{
      path: 'despesas',
      loadChildren: './modules/despesas/despesas.module#DespesasModule'
  }]
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
