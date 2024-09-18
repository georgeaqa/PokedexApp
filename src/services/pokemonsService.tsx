import { supabase } from "@/src/lib/supabase";

export async function getPokemons(type: string | null) {
  try {
    const { data, error } = await supabase
      .from("pokemons")
      .select("*")
      .order("id")
      .contains("type", [type]);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getPokemon(id: number) {
  try {
    const { data, error } = await supabase
      .from("pokemons")
      .select("*")
      .eq("id", id)
      .single();
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
