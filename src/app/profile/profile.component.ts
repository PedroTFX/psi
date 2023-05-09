import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { Profile } from '../types/Profile';
import { Item } from '../types/Item';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
	profile: Profile | null = null

	constructor(private router: Router, private profileService: ProfileService) { }

	ngOnInit() {
		const id = this.router.url.split('/').pop()!
		this.profileService.get(id).subscribe((result) => {
			const { error, ...profile } = result
			this.profile = profile
			console.log(profile);

		})
	}

	averageScore(item: Item) {
		return item.reviews.reduce((prev, curr) => prev + curr.score, 0) / item.reviews.length
	}
}
