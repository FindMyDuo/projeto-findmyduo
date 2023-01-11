export interface iUserCard {
  email: string;
  id: number;
  name: string;
  password: string;
  socialMedia: string;
  url?: string;
  confirmPassword?: string;
  favoriteGames?: iFavoriteGames;
}

export interface iFavoriteGames {
  genre: string;
  img: string;
  name: string;
}
