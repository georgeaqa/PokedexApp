import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { pokemonAction } from "@/src/store/actions/pokemon.action";

export default function Index() {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await pokemonAction.fetch_pokemons()(dispatch);
        await pokemonAction.fetch_types()(dispatch);
      } catch (error) {
        console.error("Failed to fetch pokemons:", error);
      } finally {
        setRedirect(true);
      }
    };

    fetchData();
  }, [dispatch]);

  if (redirect) {
    return <Redirect href="/home" />;
  }

  return null;
}
