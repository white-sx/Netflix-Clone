import React from "react";
import "./App.css";
import Buttons from "./components/Button/Buttos";
import Logo from "./assets/Netflix.svg";
import Titles from "./components/Titles/Title";
import Img2 from "./assets/img/mobile-0819.jpg";
import Img3 from "./assets/img/boxshot.png";
import Img4 from "./assets/img/tv.png";
import VideoTv from "./assets/img/video-tv-0819.m4v";

function App() {
  return (
    <>
      <div className="container">
        <header>
          <img className="header-img-logo" src={Logo} alt="Logo da Netflix" />
          <section className="items-right">
            <select>
              <option>Português</option>
              <option>Inglês</option>
            </select>
            <Buttons text="Entrar" />
          </section>
        </header>
        <div className="effect"></div>
        <div className="effect-bg"></div>
        <section className="container-text">
          <Titles text="Filmes, séries e muito mais. Sem limites. " />

          <h2>Assista onde quiser. Cancele quando quiser.</h2>
          <h3>
            Pronto para assistir? Informe seu email para criar ou reiniciar sua
            assinatura.
          </h3>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
          <Buttons text="Vamos lá" id="secondButton" />
        </section>
      </div>

      <div className="container-2">
        <Titles text="Aproveite na TV." />
        <h2>
          Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
          aparelhos de Blu-ray e outros dispositivos.
        </h2>
        <div className="div-post">
          <img src={Img4} alt="img" className="imgtv"/>
          <video src={VideoTv} autoPlay muted loop />
        </div>
      </div>

      <div className="container-2">
        <Titles text="Baixe séries para assistir offline." />
        <h2>Salve seus títulos favoritos e sempre tenha algo para assistir.</h2>
        <div className="div-post">
          <img src={Img2} alt="img" />
          <div className="float-div">
            <img src={Img3} alt="img" />
            <div className="float-text">
              <h3>Stranger Things</h3>
              <h4>Download em andamento... </h4>
            </div>
            <div className="git-float"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
