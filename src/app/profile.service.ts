import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './types/Profile';

@Injectable({
	providedIn: 'root'
})
export class ProfileService {

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
		withCredentials: true
	}

	constructor(private http: HttpClient) { }

	get(): Observable<Profile & { error: string }> {
		return this.http.get<Profile & { error: string }>('http://localhost:3000/api/profile', this.httpOptions)
	}
}