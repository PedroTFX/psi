import { List } from "./List"
import { Purchase } from "./Purchase";


export type Profile = {
	_id?: string;
	username: string;
	image?: string;
	library: Purchase[];
	lists: List[];
	following: Profile[];
	followers: Profile[];
}
