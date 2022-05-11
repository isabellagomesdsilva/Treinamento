import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoPoke from "../../../assets/logo.png";
import logoRed1 from "../../../assets/logoRed1P.png";
import logoRed2 from "../../../assets/logoRed2P.png";
import logoRed3 from "../../../assets/logoRed3P.png";
import logoRed4 from "../../../assets/logoRed4P.png";
import logoRed5 from "../../../assets/logoRed5P.png";
import logoRed6 from "../../../assets/logoRed6P.png";
import {AllPokemons} from '../AllPokemons/AllPokemons';
import {MyPokemons} from "../MyPokemons/MyPokemons";
import {MyLists} from "../MyLists/MyLists";
import "./style.css";

export function Inicio() {
  const [Render, setRender] = useState("AllPokemons");
  return (
    <>
      <div className='tela'>
        <div className='menu'>
          <div className='logos'>
            <img src={logoPoke} alt='Logo Pokemon' className='logoPokeAll' />
            <img src={logoRed1} alt='Logo RedFox' className='logoRed1All' />
            <img src={logoRed2} alt='Logo RedFox' className='logoRed2All' />
            <img src={logoRed3} alt='Logo RedFox' className='logoRed3All' />
            <img src={logoRed4} alt='Logo RedFox' className='logoRed4All' />
            <img src={logoRed5} alt='Logo RedFox' className='logoRed5All' />
            <img src={logoRed6} alt='Logo RedFox' className='logoRed6All' />
          </div>
          <div className='buttons'>
            <button
              className='button1'
              onClick={() => {
                setRender("AllPokemons");
              }}
            >
              Todos os pokemons
            </button>
            <button
              className='button2'
              onClick={() => {
                setRender("MyLists");
              }}
            >
              Minhas Listas
            </button>
            <button
              className='button3'
              onClick={() => {
                setRender("MyPokemons");
              }}
            >
              Meus Pokémons
            </button>
            <button
              className='button4'
              onClick={() => {alert("CRIAR NOVA LISTA")}}
            >
              Criar nova lista
            </button>
            <button
              className='button5'
              onClick={() => {alert("MODAL CRIAR NOVO POKEMON")}}
            >
              Criar novo pokemon
            </button>
            <Link to='/'>Sair</Link>
          </div>
        </div>
        {
          Render == "AllPokemons" ? <AllPokemons/> :
          Render == "MyLists" ? <MyLists/> :
          Render == "MyPokemons" ? <MyPokemons/> : null
        }
      </div>
    </>
  );
}
