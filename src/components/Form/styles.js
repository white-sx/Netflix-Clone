import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: transparent;
  width: 100%;
  position: relative;
  left: 0;
  padding: 0 5%;
  margin-top: -1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    max-width: 450px;
    margin: 13px auto;
    font-weight: 400;
    display: inline-block;
    font-size: 18pxx;
  }

  label {
    position: absolute;
    top: 50%;
    left: 20px;
    color: #8c8c8c;
    font-size: 14px;
    z-index: 5;
  }

  input {
    height: 48px;
    padding: 10px 10px 0;
    width: 350px;
    box-sizing: border-box;
    z-index: 2;
    margin-top: 10px;
    display: inline-block;
    font-size: 16px;
    border: solid 1px #8c8c8c;
    margin: 0 auto;
    margin-left: -18px;
    cursor: text;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  }

  a {
    width: 113.08px;
    height: 40px;
    margin: 15px 0;
    padding: 0 16px;
    text-align: center;
    position: relative;

    span {
      width: 66.48px;
      height: 31.19px;
      font-size: 16px;
      padding: 5.6px 0;
      margin-top: 2px;
      display: block;
    }
  }

  

  @media only screen and (min-width: 550px) and (max-width: 949px),
    only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    background-color: transparent;

    section {
      display: flex;
      flex-wrap: nowrap;
      width: fit-content;
      align-items: center;
      justify-content: center;
    }

    input {
      width: 450px;
      height: 60px;
      padding-top: 5px;
    }

    a {
      height: 60px;
      width: 183.66px;
      padding-top: 5px;
      text-align: center;
      span {
        font-size: 26px;
        width: 100%;
      }
    }
    h3 {
      max-width: none;
      width: max-content;
      margin-left: -55px;
    }
  }
`;
