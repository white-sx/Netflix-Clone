import React from "react";
import { Faq, Question } from "./styles";

function Modal({ text, text2, paragraf , styles}) {
  const [modal, setModal] = React.useState(false);

  function openModal() {
    setModal(!modal);
  }

  return (
    <div style={styles}>
      <Question onClick={openModal}>{text}</Question>
      {modal ? (
        <Faq>
          <span>
            {text2} 
            <br />
            <br />
            {paragraf}
          </span>
        </Faq>
      ) : (
        ""
      )}
    </div>
  );
}

export default Modal;
