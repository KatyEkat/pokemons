import React from "react";
import styles from "./PokemonCard.module.css";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className={styles.pokemon_card}>
      {pokemon && (
        <>
          <h1>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}{" "}
          </h1>
          <div className={styles.pokemon_image}>
            <img
              className={styles.pokemon_img_styles}
              src={pokemon.image}
              alt="pokemon"
            />
          </div>
          <ul className={styles.pokemon_information}>
            <li>Снялся в {pokemon.series} сериях </li>
            <li>Id: {pokemon.id}</li>
            <li>height: {pokemon.height}</li>
            <li>attack: {pokemon.attack}</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default PokemonCard;
