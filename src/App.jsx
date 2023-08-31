import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getPokemonByName, getPokemonList } from "./API/pokeAPI";
import PokemonChip from "./components/PokemonChip/PokemonChip";

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState(undefined);

  const checkPokemonImage = (name) => {
    const pokemon = pokemonList.find((pokemon) => pokemon.name === name);

    if (pokemon.image !== undefined) {
      setSelectedPokemon(name);
      return true;
    }
  };

  const updatePokemonlist = (data) => {
    const updatedPokemonList = pokemonList.map((pokemon) => {
      if (pokemon.name === data.name) {
        pokemon.image = data.sprites.front_default;
        pokemon.series = data.moves.length + 1;
        pokemon.id = data.id;
        pokemon.height = data.height;
        pokemon.attack = data.base_experience;
      }

      return pokemon;
    });

    setPokemonList(updatedPokemonList);
  };

  const handleGetPokemonByName = async (name) => {
    if (checkPokemonImage(name)) return;

    try {
      const { data } = await getPokemonByName(name);
      updatePokemonlist(data);
      setSelectedPokemon(data.name);
    } catch (error) {
      console.error("Error fetching Pokemon details:", error);
    }
  };

  const handleGetPokemonList = async () => {
    try {
      const { data } = await getPokemonList(10);

      setPokemonList(data.results);
    } catch (error) {
      console.error("Error fetching Pokemon details:", error);
    }
  };

  useEffect(() => {
    handleGetPokemonList();
  }, []);

  useEffect(() => {
    if (pokemonList && !selectedPokemon) {
      handleGetPokemonByName(pokemonList[0].name);
    }
  }, [pokemonList]);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {pokemonList?.map((pokemon) => {
            return (
              <PokemonChip
                onPokemonClick={() => handleGetPokemonByName(pokemon.name)}
                key={pokemon.name}
                name={pokemon.name}
              />
            );
          })}
        </div>

        <PokemonCard
          pokemon={pokemonList?.find(
            (pokemon) => pokemon.name === selectedPokemon
          )}
        />
      </div>
    </div>
  );
};

export default App;
