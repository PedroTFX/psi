import { Game } from "./Game"

export type Profile = {
	_id?: string
	image: string
	lists: Game[]
	library: { name: string }[]
}
