import React from "react";
import { Levar } from "./Style";
import icon3 from '../../assets/img/icons3.png'

function Buttons({ text }) {
  return (
    <div>
      <Levar href="#">
        <span>{text}</span>
        <img src={icon3} alt='icon3' className='arrow-right'/>
      </Levar>
    </div>
  );
}

export default Buttons;
