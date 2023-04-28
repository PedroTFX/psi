import { Game } from "./Game"
import { List } from "./List"

export type Profile = {
	_id?: string
	username: string
	image: string
	library: Game[]
	lists: List[]
	following: Profile[]
	followers: Profile[]
}
