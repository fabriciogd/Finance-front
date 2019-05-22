import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayModule} from '@angular/cdk/overlay';
import { NgxCurrencyModule } from "ngx-currency";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        OverlayModule,
        NgxCurrencyModule
    ],
    declarations: [

    ],
    exports: [
      CommonModule,
      RouterModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      FlexLayoutModule,
      OverlayModule,
      NgxCurrencyModule
    ]
})
export class SharedModule { }