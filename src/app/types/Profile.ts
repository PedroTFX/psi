import { Game } from "./Game"
import { List } from "./List"
import { Buffer } from 'buffer';

export type Profile = {
	_id?: string;
	username: string;
	image?: Buffer;
	library: Game[];
	lists: List[];
	following: Profile[];
	followers: Profile[];
}
