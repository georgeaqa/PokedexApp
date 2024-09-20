import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { CustomScreenWrapper, CustomStat } from "@/src/components";
import { router } from "expo-router";
import { getPokemonImage } from "@/src/services/pokemonsService";
import {
  getBgType,
  getBgPokemon,
  getTextColor,
} from "@/src/constants/getColor";
import { dimensions } from "@/src/constants";
import Icon from "@/src/assets/icons";
import { Pokemon } from "@/src/types/type";
import { useDispatch, useSelector } from "react-redux";
import { pokemon_selected } from "@/src/store/actions/pokemon.action";
import React, { useEffect, useState } from "react";

export default function PokemonScreen() {
  const [pokemonImageUrl, setPokemonImageUrl] = useState<string>("");
  const pokemonsData: Pokemon[] = useSelector(
    (state: any) => state.pokemon.pokemons
  );
  const pokemon: Pokemon = useSelector(
    (state: any) => state.pokemon.pokemon_selected
  );
  const dispatch = useDispatch();
  useEffect(() => {
    async function getPokemonImageUrl() {
      try {
        const pokemonImage: any = getPokemonImage(pokemon.id);
        setPokemonImageUrl(pokemonImage);
      } catch (error: any) {
        console.log(error);
      }
    }
    getPokemonImageUrl();
  }, []);

  const navigateToPokemon = (id: number) => {
    dispatch(pokemon_selected(id));
    router.replace(`/pokemonId`);
  };

  const nextPokemon = () => {
    const newId = pokemon.id < pokemonsData.length ? pokemon.id + 1 : 1;
    navigateToPokemon(newId);
  };

  const beforePokemon = () => {
    const newId = pokemon.id > 1 ? pokemon.id - 1 : pokemonsData.length;
    navigateToPokemon(newId);
  };

  return (
    <CustomScreenWrapper
      className={`${getBgPokemon(pokemon.type[0].toString().toLowerCase())}`}
    >
      <Pressable
        className="bg-black/5 p-1 rounded-full w-8"
        onPress={() => router.back()}
      >
        <Icon name="backArrow" width={24} strokeWidth={2} color="#000" />
      </Pressable>

      <View className="gap-10 px-1">
        <View className="flex-row justify-between items-center">
          <Pressable
            className="bg-black/5 p-1 rounded-full active:opacity-20"
            onPress={() => beforePokemon()}
          >
            <Icon name="arrowLeft" width={24} strokeWidth={2} color="#fff" />
          </Pressable>
          <View className="items-center">
            <Text className="text-5xl font-bold text-white">
              {pokemon.name}
            </Text>
            <Text className="text-sm font-bold text-white">
              #{pokemon.id.toString().padStart(4, "0")}
            </Text>

            <Image
              source={{ uri: pokemonImageUrl }}
              style={{
                width: dimensions.width * 0.8,
                height: dimensions.height * 0.3,
              }}
              contentFit="contain"
            />
            <View className="flex-row gap-2">
              {pokemon.type.map((type: any, index: number) => (
                <View
                  key={index}
                  className={`flex-row gap-1 items-center p-1 rounded-md ${getBgType(
                    type.toLowerCase()
                  )}`}
                >
                  <Icon name={type.toLowerCase()} color="#fff" width={20} />
                  <Text className="text-xs text-white">{type}</Text>
                </View>
              ))}
            </View>
          </View>
          <Pressable
            className="bg-black/5 p-1 rounded-full active:opacity-20"
            onPress={() => nextPokemon()}
          >
            <Icon name="arrowRight" width={24} strokeWidth={2} color="#fff" />
          </Pressable>
        </View>
        <View className="p-1 bg-white rounded-3xl gap-5 h-full">
          <Text
            className={`text-4xl font-bold text-center ${getTextColor(
              pokemon.type[0].toString().toLowerCase()
            )}`}
          >
            Stats
          </Text>
          <CustomStat
            statname="HP"
            value={pokemon.hp}
            type={pokemon.type[0].toString().toLowerCase()}
          />
          <CustomStat
            statname="Attack"
            value={pokemon.attack}
            type={pokemon.type[0].toString().toLowerCase()}
          />
          <CustomStat
            statname="Defense"
            value={pokemon.defense}
            type={pokemon.type[0].toString().toLowerCase()}
          />
          <CustomStat
            statname="Speed"
            value={pokemon.speed}
            type={pokemon.type[0].toString().toLowerCase()}
          />
        </View>
      </View>
    </CustomScreenWrapper>
  );
}
