import { Game } from "./Game"
import { List } from "./List"
import { Image } from './Image';


export type Profile = {
	_id?: string;
	username: string;
	image?: Image;
	library: Game[];
	lists: List[];
	following: Profile[];
	followers: Profile[];
}
