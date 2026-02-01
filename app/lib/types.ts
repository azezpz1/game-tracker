export interface Game {
  id: number;
  name: string;
  slug: string;
  summary: string;
  storyline?: string;
  rating?: number;
  ratingCount?: number;
  releaseDate: string;
  genres: string[];
  platforms: string[];
  developer: string;
  publisher: string;
  coverUrl: string;
  screenshotUrls?: string[];
  gameMode: string[];
  playerPerspective?: string;
  themes?: string[];
}
