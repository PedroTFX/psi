import { Buffer } from 'buffer';

export interface Game {
  _id?: string;
  name: string;
  description: string;
  image?: Buffer;
  genre: string;
  releaseDate: Date;
  platform: string;
}

  
