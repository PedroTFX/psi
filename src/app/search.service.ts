import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './types/Item';
import { api } from './constants';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
		withCredentials: true
	}

	constructor(private http: HttpClient) { }

	find(query: string): Observable<Item[]> {
		return this.http.get<Item[]>(`${api}/search?q=${query}`, this.httpOptions)
	}
}
