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
    // Replace the URL with the API endpoint that returns the user's profile information
    const url = 'https://api.example.com/profile';
    this.http.get(url).subscribe((data: any) => {
      this.user = data.user;
      this.profile = data.profile;
    });
  }
}
