import { getPokemons, getTypes } from "@/src/services/pokemonsService";
import { Pokemon, PokemonType } from "@/src/types/type";

export const FETCH_POKEMONS = "FETCH_POKEMONS";
export const FETCH_TYPES = "FETCH_TYPES";
export const POKEMON_SELECTED = "POKEMON_SELECTED";
export const TYPE_SELECTED = "TYPE_SELECTED";

export const fetch_pokemons = () => {
  return async (dispatch: any) => {
    try {
      const pokemons: Pokemon[] = await getPokemons();
      dispatch({
        type: FETCH_POKEMONS,
        payload: pokemons,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const fetch_types = () => {
  return async (dispatch: any) => {
    try {
      const types: PokemonType[] = await getTypes();
      dispatch({
        type: FETCH_TYPES,
        payload: types,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const pokemon_selected = (id: number) => {
  return {
    type: POKEMON_SELECTED,
    payload: id,
  };
};

export const type_selected = (id: number) => {
  return {
    type: TYPE_SELECTED,
    payload: id,
  };
};

export const pokemonAction = {
  fetch_pokemons,
  fetch_types,
};
