import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import {
  CustomScreenWrapper,
  CustomPokemonCard,
  CustomTypeSelected,
} from "@/src/components";
import Icon from "@/src/assets/icons";
import { router } from "expo-router";
import { Pokemon, PokemonType } from "@/src/types/type";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import {
  pokemon_selected,
  type_selected,
} from "@/src/store/actions/pokemon.action";

export default function HomeScreen() {
  const [searchPokemon, setSearchPokemon] = useState<string>("");
  const pokemonsData = useSelector(
    (state: any) => state.pokemon.filtered_pokemons
  );
  const typesData = useSelector((state: any) => state.pokemon.types);
  const dispatch = useDispatch();

  const onPressPokemon = (id: number) => {
    dispatch(pokemon_selected(id));
    router.push(`/pokemonId`);
  };

  const onPressType = (id: number) => {
    dispatch(type_selected(id));
  };

  const onPressClearFilter = () => {
    dispatch(type_selected(0));
    setSearchPokemon("");
  };
  const renderPokemonItem = ({ item }: { item: Pokemon }) => {
    return (
      <CustomPokemonCard
        pokemon={item}
        onPress={() => onPressPokemon(item.id)}
      />
    );
  };

  const renderTypeItem = ({ item }: { item: PokemonType }) => {
    return (
      <CustomTypeSelected type={item} onPress={() => onPressType(item.id)} />
    );
  };

  const search_pokemon_by_name = pokemonsData.filter((pokemon: Pokemon) =>
    pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
  );

  return (
    <CustomScreenWrapper className="bg-white">
      <View className="gap-2 px-1 mb-1">
        <Text className="font-bold text-4xl">Pokédex</Text>
        <View className="flex-row gap-3 bg-default-input h-16 items-center rounded-xl py-5 px-6">
          <Icon name="search" width={20} strokeWidth={1.5} />
          <TextInput
            className="flex-1"
            placeholder="What Pokémon are you looking for?"
            value={searchPokemon}
            onChangeText={(text: string) => setSearchPokemon(text)}
          />
        </View>
        <Pressable
          className="active:opacity-20 justify-center items-center border rounded-xl"
          onPress={() => onPressClearFilter()}
        >
          <Text>Clear Filter</Text>
        </Pressable>
        <FlatList
          data={typesData}
          renderItem={renderTypeItem}
          keyExtractor={(item: PokemonType) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerClassName="gap-2"
        />
      </View>

      {search_pokemon_by_name.length === 0 ? (
        <Text className="text-center text-3xl text-black">
          No Pokémon found
        </Text>
      ) : (
        <FlatList
          data={search_pokemon_by_name}
          renderItem={renderPokemonItem}
          keyExtractor={(item: Pokemon) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      )}
    </CustomScreenWrapper>
  );
}
