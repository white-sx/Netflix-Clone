import React from "react";
import "./App.css";
import Buttons from "./components/Button/Buttos";
import Logo from "./assets/Netflix.svg";
import Titles from "./components/Titles/Title";
import Img2 from "./assets/img/mobile-0819.jpg";
import Img4 from "./assets/img/tv.png";
import Img5 from "./assets/img/device.png";
import Img6 from "./assets/img/children.png";
import VideoTv from "./assets/img/video-tv-0819.m4v";
import VideoDevices from "./assets/img/video-devices.m4v";
import Section from "./components/Sections/Section";
import Modal from "./components/Modal/Modal";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import SubTitle from "./components/SubTitles/SubTitle";
import Icon from "../src/assets/img/icon.png"
import Icon2 from "../src/assets/img/icons2.png"

function App() {
  const styles = {
    width: "279.22px",
    height: "157.61px",
    top: "54px",
    left: "46px",
  };

  const styles2 = {
    width: "220.22px",
    height: "157.61px",
    top: "16px",
    left: "64px",
  };

  const styles3 = {
    display: "none",
  };

  const styles4 = {
    flexDirection: "row-reverse",
  };
  return (
    <>
      <div className="container">
        <header>
          <img className="header-img-logo" src={Logo} alt="Logo da Netflix" />
          <section className="items-right">
          <img src={Icon} className="arrow" alt="affter"/>
          <img src={Icon2} className="global" alt="affter"/>

            <select >
              <option>Português </option>
              <option>Inglês</option>
            </select>
            <Buttons text="Entrar" />
          </section>
        </header>
        <div className="effect"></div>
        <div className="effect-bg"></div>
        <section className="container-text">
          <Titles text="Filmes, séries e muito mais. Sem limites. " />

          <SubTitle text="Assista onde quiser. Cancele quando quiser." />

          {/* <h3>
            Pronto para assistir? Informe seu email para criar ou reiniciar sua
            assinatura.
          </h3>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
          <Buttons text="Vamos lá" id="secondButton" /> */}
          <Form />
        </section>
      </div>
      <main>
        <Section
          textPri="Aproveite na TV."
          textSec="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
        aparelhos de Blu-ray e outros dispositivos."
          srcImg={Img4}
          altImg="devices"
          srcVideo={VideoTv}
          styles={styles}
          stylesFloat={styles3}
        />

        <Section
          sectStyle={styles4}
          textPri="Baixe séries para assistir offline."
          textSec="Salve seus títulos favoritos e sempre tenha algo para assistir."
          srcImg={Img2}
          altImg="devices"
        />

        <Section
          textPri="Texto Assista quando quiser."
          textSec="Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso."
          srcImg={Img5}
          altImg="devices"
          srcVideo={VideoDevices}
          styles={styles2}
          stylesFloat={styles3}
        />
        <Section
          sectStyle={styles4}
          textPri="Crie perfis para crianças."
          textSec="Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso."
          srcImg={Img6}
          altImg="conteúdo para crinanças"
          stylesFloat={styles3}
        />
        <Section
          textPri="Perguntas frequentes"
          stylesFloat={styles3}
          styleImg={styles3}
          element1={
            <Modal
              text="O que é a Netflix?"
              text2="A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet."
              paragraf="Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes."
            />
          }
          element2={
            <Modal
              text="Quanto custa a Netflix?"
              text2="Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$25,90 a R$55,90 por mês. Sem contrato nem taxas extras."
            />
          }
          element3={
            <Modal
              text="Onde posso assistir?"
              text2="Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames."
              paragraf="Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar."
            />
          }
          element4={
            <Modal
              text="Como faço para cancelar?"
              text2="A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento."
            />
          }
          element5={
            <Modal
              text="O que eu posso assistir na Netflix?"
              text2="A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser."
            />
          }
          element6={
            <Modal
              text="A Netflix é adequada para crianças?"
              text2="A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos pais."
              paragraf="O recurso de controle dos pais, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam."
            />
          }
          element7={<Form />}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
