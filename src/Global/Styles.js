import { createGlobalStyle } from "styled-components";
import Font1 from "../assets/fonts/netflix-sans-cufonfonts/NetflixSansRegular.ttf";

export const GlobalStyles = createGlobalStyle`
    * {
  box-sizing: border-box;
}



body , #root,html{
    min-width: 320px;
    margin: 0;
    background-color: #000;
    display: flex;
    flex-direction: column;
   
}
body {
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    background-color: #f3f3f3;
    color: #333;
    font-size: 16px;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    font-family: 'Netflix Sans';
}

h1,
h2,
h3,
h4,
p {
  margin: 0px;
}

ul,
li {
    list-style: none;
    margin: 0px;
    padding: 0px;
}

img{
    display: block;
    max-width: 100%;
}

button, input{
    display: block;
    font-size: 1rem;
    font-family: var(--type-first);
    color: #333;
}

a {
  text-decoration: none;
}

.container{
    padding: 5%;
    background: url('https://assets.nflxext.com/ffe/siteui/vlv3/c16cf196-e89e-4c46-8cc7-f2eca6fb0762/335b87f0-7e66-40e7-9db4-9775d42542de/BR-pt-20220103-popsignuptwoweeks-perspective_alpha_website_small.jpg');
    height: 505.391px;
    background-size: cover;
    top: 0;
    position: relative;
    border-bottom: 8px solid #222;
    margin-bottom: 0;
    color: #fff;
    
}
    
@font-face {
    font-family: 'Netflix Sans';
    src: url(${Font1}) format('truetype');
}

#section3{
    z-index: 1;
    width: 220.22px;
    height: 157.61px;
    top: 16px;
    left: 64px;
  }

  header  a img {
    display: none !important;
  }

  @media only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
  
  body, html, #root {

    overflow-x: hidden;
  }
  
  
  header{
    background-color: transparent;
    position: relative;
    max-width: 1920px;
    padding: 20px 78px;
   margin: 28px 0 0;
    width: 100%;
   
    z-index: 10;
  }
  
  .container{
    width: 100vw;
    height: 100vh;
    padding: 0;

    h3{
      font-size: 19.2px;
      margin:  0  97.9688px;
     margin-bottom: 20px;
      width: 754.06;
    }
  }
  
  .container-text {
    padding: 70px 45px;
  }

  .header-img-logo {
  width: 134px;
  height: 36px;
  }

  .items-right{
    align-items: flex-end;
  }

  .items-right a{
    height: 36.19px;
  }
  .items-right select {
width: 113px;
height: 36.19px;
margin-right: 20px;
padding: 8px 22px;

}
main section:nth-child(5){
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 45px;
}

main section:nth-child(3) video {
  width: 349.92px !important;
  height: 197.66px !important;
  top: 40px !important;
    left: 87px !important;
}

}

@media only screen and (min-width: 768px) and (min-width: 768px) and (max-width: 946px) {
  main section:nth-child(3) video {
    width: 394px !important;
    height: 220.38px !important;
    top: 53px !important;
    left: 121px !important;
}
}

`;
