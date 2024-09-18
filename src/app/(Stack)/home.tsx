import {
  ActivityIndicator,
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import {
  CustomScreenWrapper,
  CustomPokemonCard,
  CustomTypeSelected,
} from "@/src/components";
import Icon from "@/src/assets/icons";
import { getPokemons } from "@/src/services/pokemonsService";
import { getTypes } from "@/src/services/typesService";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pokemon, PokemonType } from "@/src/types/type";

export default function HomeScreen() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchPokemon, setSearchPokemon] = useState<string>("");
  const [types, setTypes] = useState<PokemonType[]>([]);
  const [selectedType, setSelectedType] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getType() {
      try {
        const typesData: PokemonType[] = await getTypes();
        setTypes(typesData);
      } catch (error: any) {
        console.log(error);
      }
    }
    getType();
  }, []);

  useEffect(() => {
    async function fechtPokemons() {
      try {
        setLoading(true);
        const pokemonsData: Pokemon[] = await getPokemons(selectedType);
        setPokemons(pokemonsData);
      } catch (error: any) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fechtPokemons();
  }, [selectedType]);

  const renderPokemonItem = ({ item }: { item: Pokemon }) => {
    return (
      <CustomPokemonCard
        pokemon={item}
        onPress={() => router.push(`/${item.id.toString()}`)}
      />
    );
  };

  const renderTypeItem = ({ item }: { item: PokemonType }) => {
    return (
      <CustomTypeSelected
        type={item}
        onPress={() => setSelectedType(item.name)}
      />
    );
  };

  const filterPokemons = pokemons.filter((pokemon: Pokemon) =>
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
            onChangeText={(text: string) => setSearchPokemon(text)}
          />
        </View>
        <Pressable
          className="active:opacity-20 justify-center items-center w-12 border rounded-xl"
          onPress={() => setSelectedType(null)}
        >
          <Text>ALL</Text>
        </Pressable>
        <FlatList
          data={types}
          renderItem={renderTypeItem}
          keyExtractor={(item: PokemonType) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerClassName="gap-2"
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" className="color-primary" />
      ) : filterPokemons.length === 0 ? (
        <Text className="text-center text-3xl text-black">
          No Pokémon found
        </Text>
      ) : (
        <FlatList
          data={filterPokemons}
          renderItem={renderPokemonItem}
          keyExtractor={(item: Pokemon) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          windowSize={5}
          numColumns={2}
        />
      )}
    </CustomScreenWrapper>
  );
}
