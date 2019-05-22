import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { DespesaService } from '../../../core/http/despesa/despesa.service'

@Component({
    selector: 'app-despesas',
    templateUrl: './despesas.component.html',
    styleUrls: ['./despesas.component.scss']
})
export class DespesasComponent implements OnInit {

    displayedColumns: string[] = ['despesa', 'categoria', 'preco', 'delete'];
    dataSource = new MatTableDataSource<any>();

    snapshot: any[];

    despesa: string = "";
    categoria: string = "";
    preco: string = "";

    constructor(private router: Router, private despesaService: DespesaService){}

    ngOnInit() {
        this.getAll();
    } 

    delete(id: number){
        return this.despesaService.delete(id)
            .subscribe(() => {
                this.getAll();
            });
    }

    edit(id: number){
        this.router.navigate(['/despesas/editar', id]);
    }

    getAll(){
        return this.despesaService.getAll()
            .subscribe(data => this.dataSource.data = this.snapshot = data);
    }

    filter(){
        this.dataSource.data = this.snapshot.filter(a => {
            return (this.despesa !== "" ? this.executeFilter(this.despesa, a.descricao) : true) &&
                (this.categoria !== "" ? this.executeFilter(this.categoria, a.categoriaDescricao) : true) &&
                (this.preco !== "" ? this.executeFilter(this.preco, a.preco): true)
        })
    }

    executeFilter(filtro, valor){
        var regex = new RegExp(filtro, "i");

        return regex.test(valor);
    }
}