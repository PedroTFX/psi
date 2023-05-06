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
		// Descending purchase date (newest first)
		if(direction === 'DESC') {
			this.library.sort((a, b) => a.date.getTime() - b.date.getTime())
			return
		}
		// Ascending purchase date (oldest first)
		this.library.sort((a, b) => b.date.getTime() - a.date.getTime())
	}
}

