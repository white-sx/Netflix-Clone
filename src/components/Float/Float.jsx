import React from "react";
import Img3 from "../../assets/img/boxshot.png";
import { ContainerFloat } from "./styles";

function Float({styles}) {
  return (
    <ContainerFloat style={styles}>
      <img src={Img3} alt="img" />
      <div className="float-text">
        <h3>Stranger Things</h3>
        <h4>Download em andamento... </h4>
      </div>
      <div className="git-float"></div>
    </ContainerFloat>
  );
}

export default Float;
