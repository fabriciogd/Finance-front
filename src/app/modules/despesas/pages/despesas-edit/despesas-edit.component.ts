import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { DespesaService } from '../../../../core/http/despesa/despesa.service';
import { CategoriaService } from '../../../../core/http/categoria/categoria.service';
import { Categoria } from '../../../../core/models/categoria.model';

@Component({
    selector: 'app-despesas-edit',
    templateUrl: './despesas-edit.component.html',
    styleUrls: ['./despesas-edit.component.scss']
})
export class DespesasEditComponent implements OnInit {

    despesasForm: FormGroup;

    categorias: Categoria[];

    id: number = 0;

    constructor(private route: ActivatedRoute, 
      private location: Location,
      private formBuilder: FormBuilder, 
      private toastrService: ToastrService,
      private despesaService: DespesaService,
      private categoriaService: CategoriaService){}

    ngOnInit() {
        this.getCategorias();
        this.getDespesa(this.route.snapshot.params['id']);

        this.despesasForm = this.formBuilder.group({
            'descricao' : [null, Validators.required],
            'categoria' : [null, Validators.required],
            'preco' : [null, Validators.required]
          });
    } 

    get f() { return this.despesasForm.controls; }

    getDespesa(id) {
        this.despesaService.get(id).subscribe(data => {
          this.id = data.id;
          this.despesasForm.setValue({
            descricao: data.descricao,
            categoria: data.categoria,
            preco: data.preco
          });
        });
      }

    onFormSubmit(form) {
      form["id"] = this.id;

      this.despesaService.put(form)
        .subscribe(res => {
            this.toastrService.success("Despesa alterada com sucesso!");
          }, (err) => {
            console.log(err);
          }
        );
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