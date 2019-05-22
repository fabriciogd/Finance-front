import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Categoria } from '../../models/categoria.model';
import { ApiService } from '../api.service';

const routes = {
    categorias: '/categorias'
};

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

    constructor(private apiService: ApiService) {}

    getAll(): Observable<Categoria[]> {
        return this.apiService.get(routes.categorias);
    }
}