interface GameLevelArtists {
  id: number;
  name: string;
}

export interface GameLevel {
  id: number;
  snippet: string;
  artistOwner: number;
  artists: GameLevelArtists[]
}