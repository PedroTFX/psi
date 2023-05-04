import { Item } from "./Item"
import { List } from "./List"


export type Profile = {
	_id?: string;
	username: string;
	image?: string;
	library: Item[];
	lists: List[];
	following: Profile[];
	followers: Profile[];
}
