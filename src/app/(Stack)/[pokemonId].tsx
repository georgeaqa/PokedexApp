import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { CustomScreenWrapper, CustomStat } from "@/src/components";
import { router, useLocalSearchParams, Stack } from "expo-router";
import { getPokemon, getPokemonImage } from "@/src/services/pokemonsService";
import {
  getBgType,
  getBgPokemon,
  getTextColor,
} from "@/src/constants/getColor";
import { dimensions } from "@/src/constants";
import Icon from "@/src/assets/icons";
import { Pokemon } from "@/src/types/type";
import React, { useEffect, useState } from "react";

export default function PokemonScreen() {
  const { pokemonId } = useLocalSearchParams();
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();
  const [pokemonImageUrl, setPokemonImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getPokemonImageUrl() {
      try {
        const pokemonImage: any = getPokemonImage(
          parseInt(pokemonId.toString())
        );
        setPokemonImageUrl(pokemonImage);
      } catch (error: any) {
        console.log(error);
      }
    }
    async function getPokemonData() {
      try {
        const pokemonData: any = await getPokemon(
          parseInt(pokemonId.toString())
        );
        setPokemon(pokemonData);
      } catch (error: any) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getPokemonImageUrl();
    getPokemonData();
  }, [pokemonId]);

  const navigateToPokemon = (newIndex: number) => {
    router.replace(`/${newIndex}`);
  };

  const nextPokemon = () => {
    const currentId = parseInt(pokemonId.toString());
    const newId = currentId < 151 ? currentId + 1 : 1;
    navigateToPokemon(newId);
  };

  const beforePokemon = () => {
    const currentId = parseInt(pokemonId.toString());
    const newId = currentId > 1 ? currentId - 1 : 151;
    navigateToPokemon(newId);
  };

  return (
    <CustomScreenWrapper
      className={`${getBgPokemon(pokemon?.type[0].toString().toLowerCase())}`}
    >
      <Pressable
        className="bg-black/5 p-1 rounded-full w-10"
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
              {loading ? "Pokemón Name" : pokemon?.name}
            </Text>
            <Text className="text-sm font-bold text-white">
              #{loading ? "9999" : pokemon?.id?.toString().padStart(4, "0")}
            </Text>

            <Image
              source={
                loading
                  ? require("../../assets/images/DefaultPokemon.png")
                  : { uri: pokemonImageUrl }
              }
              style={{
                width: dimensions.width * 0.8,
                height: dimensions.height * 0.3,
              }}
              contentFit="contain"
            />
            <View className="flex-row gap-2">
              {loading
                ? ["Type", "Type", "Type", "Type"].map(
                    (type: any, index: number) => (
                      <View
                        key={index}
                        className={`flex-row gap-1 items-center p-1 rounded-md ${getBgType(
                          type.toLowerCase()
                        )}`}
                      >
                        <Icon color="#fff" width={20} />
                        <Text className="text-xs text-white">{type}</Text>
                      </View>
                    )
                  )
                : pokemon?.type.map((type: any, index: number) => (
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
              pokemon?.type[0].toString().toLowerCase()
            )}`}
          >
            Stats
          </Text>
          <CustomStat
            statname="HP"
            value={loading ? 250 : pokemon?.hp}
            type={pokemon?.type[0].toString().toLowerCase()}
          />
          <CustomStat
            statname="Attack"
            value={loading ? 250 : pokemon?.attack}
            type={pokemon?.type[0].toString().toLowerCase()}
          />
          <CustomStat
            statname="Defense"
            value={loading ? 250 : pokemon?.defense}
            type={pokemon?.type[0].toString().toLowerCase()}
          />
          <CustomStat
            statname="Speed"
            value={loading ? 250 : pokemon?.speed}
            type={pokemon?.type[0].toString().toLowerCase()}
          />
        </View>
      </View>
    </CustomScreenWrapper>
  );
}
