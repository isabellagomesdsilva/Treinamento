import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logoPoke from "./assets/logo.png";
import logoRed1 from "./assets/logoRed1.png";
import logoRed2 from "./assets/logoRed2.png";
import logoRed3 from "./assets/logoRed3.png";
import logoRed4 from "./assets/logoRed4.png";
import logoRed5 from "./assets/logoRed5.png";
import logoRed6 from "./assets/logoRed6.png";
import lineHome from "./assets/lineHome.png";
import elipse from "./assets/elipseHome.png";
import "./App.css";

export function App() {
  function Home() {
    return (
      <>
        <div class='fundo'></div>
        <div class='acesso'>
          <img src={logoPoke} alt='Logo Pokemon' class='logoPoke' />
          <img src={logoRed1} alt='Logo RedFox' class='logoRed1' />
          <img src={logoRed2} alt='Logo RedFox' class='logoRed2' />
          <img src={logoRed3} alt='Logo RedFox' class='logoRed3' />
          <img src={logoRed4} alt='Logo RedFox' class='logoRed4' />
          <img src={logoRed5} alt='Logo RedFox' class='logoRed5' />
          <img src={logoRed6} alt='Logo RedFox' class='logoRed6' />
          <img src={elipse} alt='Elipse' class='elipse' />
          <img src={lineHome} alt='Line' class='line' />
          <form class='form'>
            <label class='textInput1'>
              <p class="textLabel1">Usuário</p>
              <input type='text' name='name' class='input1' />
            </label>
            <label class='textInput2'>
              <p class="textLabel2">Senha</p>
              <input type='text' name='name' class='input2' />
            </label>
            <a href="" class="senha">Esqueci minha senha</a>
            <button class="buttonLogin"><p class="textButton">Entrar</p></button>
            <a href="" class="cadastro">Fazer cadastro</a>
          </form>
        </div>
        <nav>
          <Link to='/about'>About</Link>
        </nav>
      </>
    );
  }

  function About() {
    return (
      <>
        <main>
          <h2>Who are we?</h2>
          <p>That feels like an existential question, don't you think?</p>
        </main>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
      </>
    );
  }

  return (
    <div>
      <header>
        <h1>Welcome to React Router!</h1>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div>
  );
}
