import { ReviewComment } from "./ReviewComment";
import { User } from "./User";

export interface Review {
	_id?: string;
	userId: User;
	score: number;
	comment?: string;
	comments?: ReviewComment[];
}
