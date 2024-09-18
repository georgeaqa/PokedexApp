import { View, Text, Pressable, PressableProps } from "react-native";
import { Image, ImageBackground } from "expo-image";
import Icon from "@/src/assets/icons";
import { getBgType, getBgPokemon } from "@/src/constants/getColor";
import { getPokemonImage } from "../services/pokemonsService";
import { dimensions } from "../constants";
import { Pokemon } from "../types/type";
import React, { useEffect, useState } from "react";

type CustomPokemonCardProps = PressableProps & {
  pokemon: Pokemon;
};

export default function CustomPokemonCard({
  pokemon,
  ...props
}: CustomPokemonCardProps) {
  const [pokemonImage, setPokemonImage] = useState<string>("");
  useEffect(() => {
    async function getPokemonImageUrl() {
      try {
        const pokemonImage: string = getPokemonImage(pokemon.id);
        setPokemonImage(pokemonImage);
      } catch (error: any) {
        console.log(error);
      }
    }
    getPokemonImageUrl();
  }, []);

  return (
    <View className="m-1" style={{ width: (dimensions.width - 16) / 2 }}>
      <View
        className={`flex-row mt-14 items-center shadow-sm shadow-black rounded-3xl ${getBgPokemon(
          pokemon.type[0].toLowerCase()
        )}`}
        style={{ height: (dimensions.width - 16) / 2 }}
      >
        <ImageBackground
          source={require("../assets/images/pokeball.svg")}
          contentFit="cover"
          style={{
            width: (dimensions.width - 16) / 2,
            alignItems: "center",
            justifyContent: "center",
            height: (dimensions.width - 16) / 2,
          }}
        >
          <Pressable
            className="w-full  -mt-16 p-5 active:opacity-20 justify-center items-center"
            {...props}
          >
            <Image
              source={{
                uri: pokemonImage,
              }}
              style={{
                width: dimensions.width / 2,
                height: dimensions.height / 5,
              }}
              contentFit="contain"
            />
            <Text className="text-xs text-white">
              #{pokemon.id.toString().padStart(4, "0")}
            </Text>
            <Text className="text-white text-2xl font-bold">
              {pokemon.name}
            </Text>

            <View className="flex-row gap-2 items-center">
              {pokemon.type.map((type: string, index: number) => (
                <View
                  key={index}
                  className={`flex-row gap-1 items-center p-1 rounded-md ${getBgType(
                    type.toLowerCase()
                  )}`}
                >
                  <Icon color="#fff" width={20} />
                  <Text className="text-xs text-white">{type}</Text>
                </View>
              ))}
            </View>
          </Pressable>
        </ImageBackground>
      </View>
    </View>
  );
}
