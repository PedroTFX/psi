import { Game } from "./Game"

// A dashboard deve permitir ao utilizador aceder às suas listas, biblioteca de itens, utilizadores que segue e seguidores
export type List = {
	_id?: string
	name: string
	games: Game[]
}
