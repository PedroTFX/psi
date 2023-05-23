import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from './constants';
import { Item } from './types/Item';
import { List } from './types/List';

@Injectable({
  providedIn: 'root'
})

export class ListService {
	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
		withCredentials: true
	}

	constructor(private http: HttpClient) { }

	get(id: string): Observable<List & { error?: string }> {
		return this.http.get<List & { error?: string }>(`${api}/list/${id}`, this.httpOptions)
	}
}
