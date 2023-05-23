import { Component } from '@angular/core'
import { Item } from '../types/Item'
import { SearchService } from '../search.service'

@Component({
	selector: 'app-item-search',
	templateUrl: './item-search.component.html',
	styleUrls: ['./item-search.component.css']
})

export class ItemSearchComponent {
	items: Item[] = []
	query?: string

	constructor(private searchService: SearchService) { }

	onSearch() {
		if (!this.query) return
		this.searchService.find(this.query).subscribe((items) => {
			console.log(items)
			this.items = items
		})
	}
}
