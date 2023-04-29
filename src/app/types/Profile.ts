import { Game } from "./Game"
import { List } from "./List"

export type Profile = {
	_id?: string
	username: string
	image?: ImageBitmap
	library: Game[]
	lists: List[]
	following: Profile[]
	followers: Profile[]
}
