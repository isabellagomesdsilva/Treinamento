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
import charmander from "../../assets/login.jpg";
import "./Cadastro.css";

export function Register() {
  const cadastrar = true
  const navigate = useNavigate();
  return (
    <>
      <div className='fundoCadastro'>
        <div className='acessoCadastro'>
          <div className='logosCadastro'>
            <img src={logoPoke} alt='Logo Pokemon' className='logoPokeCadastro' />
            <img src={logoRed1} alt='Logo RedFox' className='logoRed1Cadastro' />
            <img src={logoRed2} alt='Logo RedFox' className='logoRed2Cadastro' />
            <img src={logoRed3} alt='Logo RedFox' className='logoRed3Cadastro' />
            <img src={logoRed4} alt='Logo RedFox' className='logoRed4Cadastro' />
            <img src={logoRed5} alt='Logo RedFox' className='logoRed5Cadastro' />
            <img src={logoRed6} alt='Logo RedFox' className='logoRed6Cadastro' />
          </div>
          <div className='form'>
            <form>
              <a href='' className='homeCadastro'>
                <nav>
                  <Link to='/'> Login</Link>
                </nav>
              </a>
              <label className='textInput1Cadastro'>
                <p className='textLabel1Cadastro'>Email</p>
                <input type='text' name='name' className='input1Cadastro' />
              </label>
              <label className='textInput2Cadastro'>
                <p className='textLabel2Cadastro'>Senha</p>
                <input type='text' name='name' className='input2Cadastro' />
              </label>
              <label className='textInput3Cadastro'>
                <p className='textLabel3Cadastro'>Confirme sua senha</p>
                <input type='text' name='name' className='input3Cadastro' />
              </label>
              <a href='' className='senhaCadastro'>
                <nav>
                  <Link to='recpassword'>Esqueci minha senha</Link>
                </nav>
              </a>
                  <nav>
                    <button onClick={() => {cadastrar ? navigate("/inicio") : null}} className="buttonLogin2">Entrar</button>
                  </nav>
            </form>
          </div>
        </div>
        <div className='login'>
          <img src={charmander} alt='Tela Cadastro' className='pokemonCadastro' />
          <img src={elipse} alt='Elipse' className='elipseCadastro' />
          <img src={lineHome} alt='Line' className='lineCadastro' />
        </div>
      </div>
    </>
  );
}
