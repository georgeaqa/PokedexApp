import { Pokemon, PokemonType } from "@/src/types/type";
import {
  FETCH_POKEMONS,
  FETCH_TYPES,
  POKEMON_SELECTED,
  TYPE_SELECTED,
} from "@/src/store/actions/pokemon.action";

interface PokemonState {
  pokemons: Pokemon[];
  pokemon_selected: Pokemon | null;
  types: PokemonType[];
  type_selected: PokemonType | null;
  filtered_pokemons: Pokemon[];
}

const initialState: PokemonState = {
  pokemons: [],
  pokemon_selected: null,
  types: [],
  type_selected: null,
  filtered_pokemons: [],
};

export const pokemonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        filtered_pokemons: action.payload,
      };
    case FETCH_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case POKEMON_SELECTED:
      const pokemon =
        state.pokemons.find(
          (pokemon: Pokemon) => pokemon.id === action.payload
        ) || null;
      return {
        ...state,
        pokemon_selected: pokemon,
      };
    case TYPE_SELECTED:
      const type =
        state.types.find((type: PokemonType) => type.id === action.payload) ||
        null;
      const filteredPokemons = type
        ? state.pokemons.filter((pokemon: Pokemon) =>
            pokemon.type.includes(type.name)
          )
        : state.pokemons;
      return {
        ...state,
        filtered_pokemons: filteredPokemons,
        type_selected: type,
      };
    default:
      return state;
  }
};
