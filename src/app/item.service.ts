import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from './constants';
import { Item } from './types/Item';

@Injectable({
	providedIn: 'root'
})
export class ItemService {
	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
		withCredentials: true
	}

	constructor(private http: HttpClient) { }

	get(id: string): Observable<Item & { error?: string }> {
		return this.http.get<Item & { error?: string }>(`${api}/item/${id}`, this.httpOptions)
	}
}
