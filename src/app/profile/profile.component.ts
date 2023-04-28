import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Profile {
  image: string | null;
  lists: { name: string }[];
  library: { name: string }[];
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    name: '',
    passWord: ''
  };
  profile: Profile = {
    image: null,
    lists: [],
    library: []
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Retrieve the current user's ID from local storage
    const currentUser = localStorage.getItem('currentUser');
  
    // Call the server to retrieve the user's information
    const url = `https://api.example.com/users/${currentUser}/profile`;
    this.http.get(url).subscribe((data: any) => {
      this.user = data.user;
      this.profile = data.profile;
    });
  }
}

