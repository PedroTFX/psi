import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	loggedIn: boolean = false
	
	ngOnInit() {
		this.loggedIn = localStorage.getItem('currentUser') != null
	}

	logout() {
		localStorage.removeItem('currentUser')
		this.deleteAllCookies()
	}

	deleteAllCookies() {
		const cookies = document.cookie.split(";")
		for(let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i]
			const eqPos = cookie.indexOf("=")
			const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
			document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
		}
	}
}
