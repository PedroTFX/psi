import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

interface Profile {
	image: string;
	lists: { name: string }[];
	library: { name: string }[];
}

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
	profile: Profile | null = null;

	constructor(private profileService: ProfileService, private router: Router) { }

	ngOnInit() {
		this.profileService.get().subscribe((result) => {
			console.log(result)
			if (result.error) {
				//this.router.navigate(['/login'])
			}
			this.profile = result
		})
	}
}

