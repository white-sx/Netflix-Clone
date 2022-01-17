import styled from "styled-components";

export const ContainerSection = styled.section`
  border-bottom: 8px solid #222;
  padding: 50px 6%;
  margin-bottom: 0;
  color: #fff;
  width: 100%;
  height: max-content;
  z-index: 2;
  background-color: #000;
  text-align: center;

  h1 {
    font-size: 26px;
    line-height: 1.1;
    margin-bottom: 0.5rem;
  }

  h2 {
    margin: 0.75em 0 0.25em;
    font-size: 1.125rem;
  }

  div > img {
    max-width: 100%;
    height: auto;
    border: 0;
    position: relative;
    z-index: 2;
  }

  .relativeClass {
    position: relative;
  }

  video {
    position: absolute;
    z-index: 1;
  }

  ul {
    list-style: none;

    li {
      margin: 10px 0;
    }
  }

  formPad {
    width: max-content;
    height: max-content;
    margin: 50px 0;
    display: block;
  }
  @media only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    .text {
      width: 595.05px;
    }

    h1 {
      font-size: 50px;
      line-height: 1.1;
      margin-bottom: 2rem;
    }

    h2 {
      margin: 19.5px 0 6.5px;
      font-size: 26px;
    }

    video {
      width: 387.06px !important;
      height: 216.88px !important;
      top: 83px !important;
      left: 72px !important;
    }

    div > img {
      width: 530px;
      height: 397px;
    }
  }

 
`;

export const Post = styled.div`
  position: relative;
`;
