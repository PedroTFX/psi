import { Component, Input } from '@angular/core';
import { Purchase } from '../types/Purchase';

@Component({
  selector: 'app-purchase-preview',
  templateUrl: './purchase-preview.component.html',
  styleUrls: ['./purchase-preview.component.css']
})
export class PurchasePreviewComponent {
	@Input('purchase') purchase: Purchase | null = null
}
