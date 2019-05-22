import { NgModule } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import { 
    MatButtonModule, 
    MatIconModule, 
    MatSlideToggleModule,  
    MatToolbarModule, 
    MatSidenavModule, 
    MatListModule, 
    MatDividerModule,
    MatTableModule,
    MatFormFieldModule, 
    MatCardModule,
    MatInputModule, 
    MatOptionModule,
    MatSelectModule } from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        CdkTableModule,
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatOptionModule,
        MatDividerModule,
        MatTableModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule
    ],
    exports: [
        CdkTableModule,
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatOptionModule,
        MatDividerModule,
        MatTableModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule
    ]
})
export class MaterialModule { }