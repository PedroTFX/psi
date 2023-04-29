import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../types/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private url = '...'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  get(): Observable<Profile> { // Change the return type to Observable<Profile>
    return this.http.get<Profile>(this.url);
  }
}
