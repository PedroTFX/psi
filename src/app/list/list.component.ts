import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { List } from '../types/List';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
	list: List | null = null

	constructor(private router: Router, private listService: ListService) { }

	ngOnInit() {
		const id = this.router.url.split('/').pop()!
		this.listService.get(id).subscribe((result) => {
			const { error, ...list } = result
			this.list = list

		})
	}
}
