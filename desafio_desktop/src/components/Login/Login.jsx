import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logoPoke from "../../assets/logo.png";
import logoRed1 from "../../assets/logoRed1.png";
import logoRed2 from "../../assets/logoRed2.png";
import logoRed3 from "../../assets/logoRed3.png";
import logoRed4 from "../../assets/logoRed4.png";
import logoRed5 from "../../assets/logoRed5.png";
import logoRed6 from "../../assets/logoRed6.png";
import lineHome from "../../assets/lineHome.png";
import elipse from "../../assets/elipseHome.png";
import pikachu from "../../assets/login.jpg";
import "./Login.css";

export function Home() {
  const entrar = true
  const navigate = useNavigate()
  return (
    <>
      <div className='fundoLogin'>
        <div className='acessoLogin'>
          <div className='logos'>
            <img src={logoPoke} alt='Logo Pokemon' className='logoPokeLogin' />
            <img src={logoRed1} alt='Logo RedFox' className='logoRed1Login' />
            <img src={logoRed2} alt='Logo RedFox' className='logoRed2Login' />
            <img src={logoRed3} alt='Logo RedFox' className='logoRed3Login' />
            <img src={logoRed4} alt='Logo RedFox' className='logoRed4Login' />
            <img src={logoRed5} alt='Logo RedFox' className='logoRed5Login' />
            <img src={logoRed6} alt='Logo RedFox' className='logoRed6Login' />
          </div>
          <div className='form'>
            <form>
              <label className='textInput1Login'>
                <p className='textLabel1Login'>Usuário</p>
                <input type='text' name='name' className='input1Login' />
              </label>
              <label className='textInput2Login'>
                <p className='textLabel2Login'>Senha</p>
                <input type='text' name='name' className='input2Login' />
              </label>
              <a href='' className='senhaLogin'>
                <nav>
                  <Link to='recpassword'>Esqueci minha senha</Link>
                </nav>
              </a>
                  <nav>
                  <button onClick={() => {entrar ? navigate("/inicio") : null}} className="buttonLogin">Entrar</button>
                  </nav>
              <a href='' className='cadastroLogin'>
                <nav>
                  <Link to='register'>Fazer cadastro</Link>
                </nav>
              </a>
            </form>
          </div>
        </div>
        <div className='login'>
          <img src={pikachu} alt='Fundo Login' className='pokemonLogin' />
          <img src={elipse} alt='Elipse' className='elipseLogin' />
          <img src={lineHome} alt='Line' className='lineLogin' />
        </div>
      </div>
    </>
  );
}
