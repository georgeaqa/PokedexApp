import {
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  Modal,
} from "react-native";
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
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const onPressPokemon = (id: number) => {
    dispatch(pokemon_selected(id));
    router.push(`/pokemonId`);
  };

  const onPressType = (id: number) => {
    dispatch(type_selected(id));
    setModalVisible(false);
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
        <View className="flex-row items-center justify-between active:opacity-20">
          <Text className="font-bold text-4xl">Pokédex</Text>
          <Pressable
            className="bg-black/5 p-2 rounded-full"
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Icon name="filter" />
          </Pressable>
        </View>

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
          className="bg-black p-2 rounded-full active:opacity-20"
          onPress={() => onPressClearFilter()}
        >
          <Text className="text-white font-extrabold text-center">Clear Filter</Text>
        </Pressable>
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
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white rounded-3xl p-5 items-center w-[70%] gap-2">
            <FlatList
              data={typesData}
              renderItem={renderTypeItem}
              keyExtractor={(item: PokemonType) => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerClassName="gap-3"
              columnWrapperClassName="gap-10"
              numColumns={3}
            />
            <Pressable
              className="bg-black p-2 rounded-full active:opacity-20"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-white font-extrabold">Close Filter</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </CustomScreenWrapper>
  );
}
