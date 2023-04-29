import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent {
  @Output() searchResults: any[];
  searchQuery?: string;

  constructor(private http: HttpClient) { 
    this.searchResults = [];
  }

  onSearch() {
    this.http.get<any[]>(`/api/search?q=${this.searchQuery}`).subscribe(
      (results) => {
        this.searchResults = results;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
