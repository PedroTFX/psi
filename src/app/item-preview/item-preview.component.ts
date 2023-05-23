import { Component, Input } from '@angular/core';
import { Item } from '../types/Item';

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.css']
})
export class ItemPreviewComponent {
	@Input('item') item: Item | null = null

	averageScore(item: Item) {
		return item.reviews.reduce((prev, curr) => prev + curr.score, 0) / item.reviews.length
	}
}
