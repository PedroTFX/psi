import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../types/Profile';
import { DashboardService } from '../dashboard.service';
import { CommonModule } from '@angular/common';
import { Item } from '../types/Item';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
	dashboard: Profile | null = null;

	constructor(private dashboardService: DashboardService, private router: Router) { }

	ngOnInit() {
		this.dashboardService.get().subscribe((result) => {
			const { error, ...dashboard } = result
			if (error) {
				this.router.navigate(['/login'])
			}
			this.dashboard = dashboard
		})
	}

	averageScore(item: Item) {
		return item.reviews.reduce((prev, curr) => prev + curr.score, 0) / item.reviews.length
	}
}
