import React from "react";
import styles from "./PokemonChip.module.css";

const PokemonChip = ({ name, onPokemonClick }) => {
  return (
    <div className={styles.pokemon_chip} onClick={onPokemonClick}>
      {name}
    </div>
  );
};

export default PokemonChip;
