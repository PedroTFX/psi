import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './types/Profile';
import { api } from './constants';

@Injectable({
	providedIn: 'root'
})
export class ProfileService {

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
		withCredentials: true
	}

	constructor(private http: HttpClient) { }

	get(id: string): Observable<Profile & { error?: string }> {
		return this.http.get<Profile & { error?: string }>(`${api}/profile/${id}`, this.httpOptions)
	}
}
