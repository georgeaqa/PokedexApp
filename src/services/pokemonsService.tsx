import { supabase } from "@/src/lib/supabase";
import { Pokemon } from "../types/type";

export const getPokemons = async (): Promise<Pokemon[]> => {
  const { data, error } = await supabase
    .from("pokemons")
    .select("*")
    .order("id");
  if (error) {
    throw new Error(error.message);
  }
  return data as Pokemon[];
};

export async function getTypes() {
  try {
    const { data, error } = await supabase.from("types").select("*");
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export function getPokemonImage(id: number) {
  try {
    const data = supabase.storage
      .from("pokemons")
      .getPublicUrl(`${id.toString()}.png`).data;
    return data.publicUrl;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
