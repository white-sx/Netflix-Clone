import styled from "styled-components";

export const Levar = styled.a`
  background-color: #e50914;
  line-height: normal;
  padding: 5px 6px;
  font-size: 0.9rem;
  font-weight: 400;
  width: 56px;
  height: 27px;
  color: white;
  text-decoration: none;
  border-radius: 3px;
  display: inline-block;
  margin-left: 10px;
  z-index: 10;
  box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
  position: relative;

  .arrow-right {
  
   position: absolute;
   top: 23%;
   width: 20px;
    right: 7%; 
 }

  @media only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    width: 78.7px;
    height: 34px;
    padding: 7px 17px;

    .arrow-right {
   display: block;
   position: absolute;
   top: 30%;
   width: 25px;
    right: 5%; 
 }
  }

  
`;
