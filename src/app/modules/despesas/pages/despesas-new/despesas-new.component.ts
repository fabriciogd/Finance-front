import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { DespesaService } from '../../../../core/http/despesa/despesa.service';
import { CategoriaService } from '../../../../core/http/categoria/categoria.service';
import { Categoria } from '../../../../core/models/categoria.model';

@Component({
    selector: 'app-despesas-new',
    templateUrl: './despesas-new.component.html',
    styleUrls: ['./despesas-new.component.scss']
})
export class DespesasNewComponent implements OnInit {

    despesasForm: FormGroup;

    categorias: Categoria[];

    id: number = 0;

    constructor(private router: Router, 
        private location: Location,
        private formBuilder: FormBuilder, 
        private toastrService: ToastrService,
        private despesaService: DespesaService,
        private categoriaService: CategoriaService){}

    ngOnInit() {
        this.despesasForm = this.formBuilder.group({
            'descricao' : [null, Validators.required],
            'categoria' : [null, Validators.required],
            'preco' : [null, Validators.required]
          });

        this.getCategorias();
    } 

    get f() { return this.despesasForm.controls; }

    onFormSubmit(form) {

        this.despesaService.post(form)
            .subscribe(res => {
                this.toastrService.success("Despesa adicionada com sucesso!");
                this.router.navigate(['/despesas/listar']);
            }, (err) => {
                console.log(err);
            });
    }

    getCategorias(){
        this.categoriaService.getAll()
            .subscribe(data => {
                this.categorias = data;
            }, (err) => {
                console.log(err);
            });
    }

    goBack(){
        this.location.back();
    }
}