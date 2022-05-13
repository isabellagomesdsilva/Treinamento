import axios from "axios";
import React, { useState, useEffect } from "react";
import "./styleCards.css";

export function Cards(props) {
  const { page, pokemon } = props;
  const [data, setData] = useState();
  useEffect(() => {
    async function pokemonCard(page) {
      const { data } = await axios(
        `http://localhost:5000/pokemon/all?page=${page}&limit=4`
      );
      setData(data.data);
    }
    pokemonCard(page);
  }, [page]);

  return (
    <div className="allCards">
      {pokemon == "notFound" ? (
        <div><h1 className="notFound">Pokémon não encontrado</h1></div>
      ) : pokemon[0] && pokemon != "empty" ? (
        pokemon.map((id) => {
          let indexOne = id.data.Pokedex_Number;
          let idOne = new String(indexOne);
          let imgPokeOne = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idOne.padStart(
            3,
            "0"
          )}.png`;
          console.log(imgPokeOne)
          return (
            <div className="cardOne">
                <img key={id} src={imgPokeOne} alt='pokemons' class='imgCardOne' />
                <div className='propertiesOne'>
                  <p className='cardNameOne'>{id.data.Name}</p>
                  <p className='card_ATKOne'>ATK: {id.data.ATK}</p>
                  <p className='card_DEFOne'>DEF: {id.data.DEF}</p>
                  <p className='card_STAOne'>STA: {id.data.STA}</p>
              </div>
            </div>
          );
        })
      ) : (
        data?.map((el) => {
          let index = el.Pokedex_Number;
          let id = new String(index);
          let imgPoke = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id.padStart(
            3,
            "0"
          )}.png`;
          return (
              <div className='card'>
                <img key={el} src={imgPoke} alt='pokemons' class='imgCards' />
                <div className='properties'>
                  <p className='cardName'>{el.Name}</p>
                  <p className='card_ATK'>ATK: {el.ATK}</p>
                  <p className='card_DEF'>DEF: {el.DEF}</p>
                  <p className='card_STA'>STA: {el.STA}</p>
                </div>
              </div>
          );
        })
      )}
    </div>
  );
}
