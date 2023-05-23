import { Review } from "./Review";

export interface Item {
	_id?: string;
	type: string;
	name: string;
	image1: string;
	image2?: string;
	image3?: string;
	videoURL?: string;
	description: string;
	platform: string[];
	languages: string[];
	price: number;
	reviews: Review[];
}


