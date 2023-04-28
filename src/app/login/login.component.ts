import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	username: string = ''
	password: string = ''
	formError: string = ''

	constructor(private userService: UserService, private router: Router) { }

	login() {
		const user = { username: this.username, password: this.password }

		this.userService.login(user).subscribe((result) => {
			this.formError = result.formError || ''

			if (result.user) {
				console.log(result.user);
				
				// Store the current user's ID in local storage
				localStorage.setItem('currentUser', result.user.id);
				
				this.router.navigate(['/dashboard']);
			}
		})
	}
}
