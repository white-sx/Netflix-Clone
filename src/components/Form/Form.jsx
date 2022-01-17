import React from 'react'
import Buttons from '../Button/Buttos'
import { FormContainer } from './styles'

function Form() {
    return (
        <FormContainer>
            <h3>
            Pronto para assistir? Informe seu email para criar ou reiniciar sua
            assinatura.
          </h3>
          <section>
          <input type="text" name="email" placeholder='Email'/>
          <Buttons text="Vamos lá" id="secondButton" />
           
          </section>
        </FormContainer>
    )
}

export default Form
