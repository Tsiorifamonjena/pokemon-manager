export type Pokemon = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  size: number;
  weight: number;
  type: PokemonType | "";
};

export enum PokemonType {
  electricity = "electricity",
  fire = "fire",
  ice = "ice",
  wind = "wind",
}
