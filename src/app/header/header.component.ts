import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	loggedIn: boolean = false

	constructor(private router: Router, private userService: UserService) {}

	ngOnInit() {
		this.loggedIn = localStorage.getItem('currentUser') != null
		window.addEventListener('storage', (event) => {
			this.loggedIn = localStorage.getItem('currentUser') != null
		})
	}

	logout() {
		this.userService.logout().subscribe((result) => {
			localStorage.removeItem('currentUser')
			this.loggedIn = false
			this.router.navigate([''])
		})
	}
}


