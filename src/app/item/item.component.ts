import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../types/Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
	item: Item | null = null
	error: string = ''

	constructor(private router: Router, private itemService: ItemService) {}

	ngOnInit() {
		const id = this.router.url.split('/').pop()!
		this.itemService.get(id).subscribe((result) => {
			const { error, ...item } = result
			if(error) {
				this.error =  error
				return
			}
			this.item = item
		})
	}
}
