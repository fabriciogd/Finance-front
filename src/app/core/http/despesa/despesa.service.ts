import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Despesa } from '../../models/despesa.model';
import { ApiService } from '../api.service';

const routes = {
    despesas: '/despesas',
    despesa: (id: number) =>  `/despesas/${id}`
};

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

    constructor(private apiService: ApiService) {}

    getAll(): Observable<Despesa[]> {
        return this.apiService.get(routes.despesas);
    }

    get(id: number): Observable<Despesa> {
        return this.apiService.get(routes.despesa(id));
    }

    put(object: any){
        return this.apiService.put(routes.despesas, object);
    }

    post(object: any){
        return this.apiService.post(routes.despesas, object);
    }

    delete(id: any){
        return this.apiService.delete(routes.despesa(id));
    }
}