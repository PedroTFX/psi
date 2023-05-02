import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './types/Profile';
import { api } from './constants';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
		withCredentials: true
	}

	constructor(private http: HttpClient) { }

	get(): Observable<Profile & { error?: string }> {
		return this.http.get<Profile & { error?: string }>(`${api}/dashboard`, this.httpOptions)
	}
}
