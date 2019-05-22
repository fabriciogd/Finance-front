
import { NgModule } from '@angular/core';

import { DespesasComponent } from './pages/despesas.component';
import { DespesasEditComponent } from './pages/despesas-edit/despesas-edit.component';
import { DespesasNewComponent } from './pages/despesas-new/despesas-new.component';
import { DespesasRoutingModule } from './despesas.routing';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        DespesasComponent,
        DespesasEditComponent,
        DespesasNewComponent
    ],
    imports: [
        SharedModule,

        DespesasRoutingModule
    ],
    exports: [],
    providers: []
})
export class DespesasModule {}