import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	username = ''
	password = ''
	formError = ''
	constructor(private userService: UserService, private router: Router) { }

	login() {
		const user = { username: this.username, password: this.password }

		this.userService.login(user).subscribe((result: any) => {
			this.formError = result.formError || ''
			if (result.user) {
				localStorage.setItem('currentUser', result.user.id)
				window.dispatchEvent(new Event('storage'))
				this.router.navigate(['/dashboard'])}
		})
	}


	containsUppercase(str: string) {
		return /[A-Z]/.test(str)
	}
	containsLowercase(str: string) {
		return /[a-z]/.test(str)
	}
	containsNumber(str: string) {
		return /[0-9]/.test(str)
	}
}

