import React from "react";
import Float from "../Float/Float";
import SubTitle from "../SubTitles/SubTitle";
import Titles from "../Titles/Title";
import { ContainerSection, Post } from "./setyle";

function Section({
  textPri,
  textSec,
  srcImg,
  altImg,
  srcVideo,
  altVideo,
  styles,
  stylesFloat,
  styleImg,
  sectStyle,
  element1,
  element2,
  element3,
  element4,
  element5,
  element6,
  element7,
}) {
  return (
    <ContainerSection style={sectStyle} className="formStyles">
      <div className="text">
      <Titles text={textPri} />
      <SubTitle text={textSec} />
      </div>
      <div className="relativeClass">
        <Post>
          <img src={srcImg} alt={altImg} style={styleImg}/>
        </Post>
        <Float styles={stylesFloat} />
        <video
          src={srcVideo}
          alt={altVideo}
          autoPlay
          muted
          loop
          id="section3"
          style={styles}
        />
      </div>
      <div>
        <ul>
          <li>{element1}</li>
          <li> {element2}</li>
          <li> {element3}</li>
          <li> {element4}</li>
          <li> {element5}</li>
          <li> {element6}</li>
        </ul>
      </div>

      <div className="formPad">{element7}</div>
    </ContainerSection>
  );
}

export default Section;
