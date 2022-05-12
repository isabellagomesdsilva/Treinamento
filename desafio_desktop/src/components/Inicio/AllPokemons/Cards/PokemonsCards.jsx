import axios from "axios";
import React, { useState, useEffect } from "react";
import "./styleCards.css";

export function Cards() {
  const [data, setData] = useState();
  useEffect(() => {
    async function pokemonCard() {
      const { data } = await axios(
        "http://localhost:5000/pokemon/all?pages=0&limit=4"
      );
      console.log("data ->", data.data);
      setData(data.data);
    }
    pokemonCard();
  }, []);

  return data?.map((el) => {
        let index = el.Pokedex_Number;
        let id = new String(index);
        let imgPoke = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id.padStart(
            3,
            "0"
          )}.png`;
    return (
      <div className='card'>
        <img key={el} src={imgPoke} alt='' class='imgCards' />
        <div className='properties'>
          <p className='cardName'>{el.Name}</p>
          <p className="card_ATK">ATK: {el.ATK}</p>
          <p className="card_DEF">DEF: {el.DEF}</p>
          <p className="card_STA">STA: {el.STA}</p>
        </div>
      </div>
    );
  });
}
