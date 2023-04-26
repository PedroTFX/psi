import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './types/User';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	}

	constructor(private http: HttpClient) { }

	createUser(user: User): Observable<any> {
		return this.http.post<User>('http://localhost:3000/api/create-account', user, this.httpOptions)
	}
}
