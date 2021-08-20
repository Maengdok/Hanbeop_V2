import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Category } from "../models/category.model";

const baseUrl = 'http://localhost:8080/api/categories';

@Injectable({ 'providedIn': 'root' })
export class CategoryService {
    
    constructor(private http: HttpClient) {}

    getAll(): Observable<Category[]> {
        return this.http.get<Category[]>(baseUrl);
    }

    get(id: any): Observable<Category> {
        return this.http.get(`${baseUrl}/${id}`);
    }
}
