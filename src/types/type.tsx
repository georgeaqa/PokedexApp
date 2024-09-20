export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}

export interface PokemonType {
  id: number;
  name: string;
}