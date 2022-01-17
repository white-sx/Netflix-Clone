import styled from "styled-components";

export const ContainerFloat = styled.section`
  position: absolute;
  display: flex;
  left: 10%;
  bottom: 5%;
  padding: 0.35em 0.75em;
  align-items: center;
  width: 268px;
  height: 68.78px;
  min-width: 15em;
  border: 2px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 2em 0 #000;
  border-radius: 0.75em;
  margin: 0 auto;
  background: #000;
  z-index: 4;

  .float-text {
    flex-shrink: 1;
    margin: 0.3em 0;
    text-align: left;
    margin-left: 20px;
    width: 130px;
  }

  .float-text h3 {
    color: #fff;
    font-weight: 600;
    font-size: 0.9em;
  }

  .float-text h4 {
    color: #0071eb;
    font-size: 0.75em;
    font-weight: 400;
  }

  img {
    height: 48px;
  }

  .git-float {
    width: 3em;
    height: 3em;
    outline: 2px solid #000;
    outline-offset: -2px;
    display: block;
    background: url("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif")
      center center no-repeat;
    background-size: 100%;
    content: "";
  }

  @media only screen and (min-width: 550px) and (max-width: 949px),
    only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    width: 339.97px;
    height: 96px;
    top: 68%;
    left: 89px;
    justify-content: space-around img {
      height: 51.42px;
      height: 72px;
    }

    .float-text {
      width: 200px;
    }
    .float-text h4 {
      font-size: 14.4px;
    }

    .float-text h3 {
      font-size: 16px;
    }

    .git-float {
      width: 48px;
      height: 60px;
    }
  }
 
`;
