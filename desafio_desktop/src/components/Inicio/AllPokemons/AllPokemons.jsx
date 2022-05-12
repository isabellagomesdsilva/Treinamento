import React, { useState } from "react";
import Lupa from "../../../assets/Lupa.png";
import menuBarra from "../../../assets/MenuBarra.png";
import menuCard from "../../../assets/MenuCard.png";
import { Cards } from "./Cards/PokemonsCards";
import { Lists } from "./Lists/PokemonsLists";

import "./styles.css";
export function AllPokemons() {
  const [TypeVision, setTypeVision] = useState("cards");
  return (
    <div className='AllPokes'>
      <div className='HeaderAll'>
        <h1>TODOS OS POKEMONS</h1>
      </div>
      <div className='barraPesquisa'>
        <label className='labelSearch'>
          <img src={Lupa} alt='' className='iconLupa' />
          <input
            type='text'
            name='name'
            className='inputSearch'
            placeholder='Buscar por nome do pokémon'
          />
          <button className='buttonSearch'>Buscar</button>
        </label>
      </div>
      {TypeVision == "cards" ? (
        <div className='visãoBarra'>
          <button
            onClick={() => {
              setTypeVision("lists");
            }}
            className='buttonList'
          >
            <img
              src={menuBarra}
              alt='Botão para visualização em Lista'
              className='iconBarra'
            />{" "}
            Visão por Lista
          </button>
        </div>
      ) : (
        <div className='visãoCard'>
          <button
            onClick={() => {
              setTypeVision("cards");
            }}
            className='buttonFilter'
          >
            <img
              src={menuCard}
              alt='Botão para visualização em Card'
              className='iconFilter'
            />{" "}
            Visão por Cards
          </button>
        </div>
      )}


      {TypeVision == "cards" ? (
        <div className='cardsPokes'>
          <Cards />
        </div>
      ) : (
        <div>
          <Lists />
        </div>
      )}
    </div>
  );
}
