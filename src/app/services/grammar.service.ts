import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Grammar } from "../models/grammar.model";

const baseUrl = 'http://localhost:8080/api/grammaires';

@Injectable({ 'providedIn': 'root' })
export class GrammarService {
    
    constructor(private http: HttpClient) {}

    getAll(): Observable<Grammar[]> {
        return this.http.get<Grammar[]>(baseUrl);
    }

    get(id: any): Observable<Grammar> {
        return this.http.get(`${baseUrl}/${id}`);
    }

    findByLetter(letter: any): Observable<Grammar[]> {
        return this.http.get<Grammar[]>(`${baseUrl}?lettre=${letter}`);
    }

    findByCategory(category: any): Observable<Grammar[]> {
        return this.http.get<Grammar[]>(`${baseUrl}?categorie=${category}`);
    }

    findByLetterAndCategory(letter: any, category: any): Observable<Grammar[]> {
        return this.http.get<Grammar[]>(`${baseUrl}?lettre=${letter}&categorie=${category}`);
    }
}