import { Item } from "./Item"

export type Purchase = {
	userId: string;
	item: Item;
	date: Date;
}
