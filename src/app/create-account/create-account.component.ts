import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-create-account',
	templateUrl: './create-account.component.html',
	styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
	username: string = ''
	password: string = ''
	usernameError: string = ''
	passwordError: string = ''
	formError: string = ''
	success: boolean = false

	constructor(private userService: UserService, private router: Router) { }

	createAccount() {
		const user = { username: this.username, password: this.password }
		this.userService.createUser(user).subscribe((result) => {
			this.usernameError = result.usernameError || ''
			this.passwordError = result.passwordError || ''
			this.formError = result.formError || ''

			if (result.user) {
				this.success = true
			}
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
