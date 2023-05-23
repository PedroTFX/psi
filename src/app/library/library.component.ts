import { Component } from '@angular/core';
import { LibraryService } from '../library.service';
import { Purchase } from '../types/Purchase';

@Component({
	selector: 'app-library',
	templateUrl: './library.component.html',
	styleUrls: ['./library.component.css']
})
export class LibraryComponent {
	library: Purchase[] = []

	constructor(private libraryService: LibraryService) { }

	ngOnInit() {
		this.libraryService.get().subscribe(library => this.library = library)
	}

	orderByPurchaseDate(direction: string) {
		console.log(direction);

		// Descending purchase date (newest first)
		if(direction === 'ASC') {
			console.log(this.library[0].date);
			console.log(this.library[1].date);

			const result = this.library.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
			console.log(result);

			return
		}
		// Ascending purchase date (oldest first)
		this.library.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	}
}

