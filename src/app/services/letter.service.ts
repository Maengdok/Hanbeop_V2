import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Letter } from "../models/letter.model";

const baseUrl = 'http://localhost:8080/api/lettres';

@Injectable({ 'providedIn': 'root' })
export class LetterService {
    
    constructor(private http: HttpClient) {}

    getAll(): Observable<Letter[]> {
        return this.http.get<Letter[]>(baseUrl);
    }
}
