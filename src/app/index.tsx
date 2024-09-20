import { Redirect } from "expo-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokemonAction } from "@/src/store/actions/pokemon.action";
import { View, Text } from "react-native";

export default function Index() {
  const dispatch = useDispatch();
  const pokemonsData = useSelector(
    (state: any) => state.pokemon.filtered_pokemons
  );
  const typesData = useSelector((state: any) => state.pokemon.types);
  useEffect(() => {
    const fetchData = async () => {
      await pokemonAction.fetch_pokemons()(dispatch);
      await pokemonAction.fetch_types()(dispatch);
    };

    fetchData();
  }, [dispatch]);

  if (pokemonsData.length > 0 && typesData.length > 0) {
    return <Redirect href="/home" />;
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-bold text-4xl">Loading...</Text>
    </View>
  );
}
