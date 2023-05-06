import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from './constants';
import { Item } from './types/Item';
import { Purchase } from './types/Purchase';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
		withCredentials: true
	}

	constructor(private http: HttpClient) { }

	get(): Observable<Purchase[]> {
		return this.http.get<Purchase[]>(`${api}/library`, this.httpOptions)
	}
}
