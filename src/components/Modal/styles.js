import styled from "styled-components";

export const Question = styled.button`
  padding: 14.4px 36.6px 14.4px 21.6px;
  margin: 1px;
  margin-left: -20px;
  font-weight: 400;
  position: relative;
  width: 386px;
  height: 51.78px;
  border: 0;
  display: block;
  text-align: left;
  background: #303030;
  color: #fff;
  z-index: 20;

  @media only screen and (min-width: 550px) and (max-width: 949px),
    only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    width: 815px;
    height: 74.59px;
    padding: 20.8px 57.2px 20.8px 31.2px;
    font-size: 26px;
  }

  
`;

export const Faq = styled.div`
  display: block;
  text-align: left;
  background: #303030;
  width: 386px;
  height: max-content;
  margin-left: -20px;

  span {
    display: block;
    padding: 1.6rem;
    text-align: left;
  }

  @media only screen and (min-width: 550px) and (max-width: 949px),
    only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    width: 815px;
    font-size: 26px;
  }

  
`;
