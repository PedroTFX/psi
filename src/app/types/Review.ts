import { ReviewComment } from "./ReviewComment";

export interface Review {
	_id?: string;
	userId: string;
	score: number;
	comment?: string;
	comments?: ReviewComment[];
}
