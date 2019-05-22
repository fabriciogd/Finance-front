import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesasComponent } from './pages/despesas.component';
import { DespesasEditComponent } from './pages/despesas-edit/despesas-edit.component';
import { DespesasNewComponent } from './pages/despesas-new/despesas-new.component';

export const routes: Routes = [
    {
        path: '',
        children: [{
            path: 'listar',
            component: DespesasComponent
        }, {
            path: 'editar/:id',
            component: DespesasEditComponent
        },
        {
            path: 'novo',
            component: DespesasNewComponent
        }]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DespesasRoutingModule { }