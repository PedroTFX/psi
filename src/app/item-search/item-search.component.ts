import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface SearchResults {
  profiles?: Profile[];
  games?: Game[];
  gameLists?: GameList[];
}

interface Profile {
  _id: string;
  userId: string;
  username: string;
  image: string;
  library: string[];
  lists: string[];
  following: string[];
  followers: string[];
  __v: number;
}

interface Game {
  _id: string;
  name: string;
  __v: number;
}

interface GameList {
  _id: string;
  userId: string;
  name: string;
  games: Game[];
  __v: number;
}

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent {
  @Output() searchResults: SearchResults = {};
  searchQuery?: string;

  constructor(private http: HttpClient) { }

  onSearch() {
    if (!this.searchQuery) {
      return;
    }

    this.http.get<SearchResults>(`/api/search?q=${this.searchQuery}`).subscribe(
      (results) => {
        this.searchResults = results;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
