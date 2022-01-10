import { createGlobalStyle } from "styled-components";
import Font1 from '../assets/fonts/netflix-sans-cufonfonts/NetflixSansRegular.ttf'


export const GlobalStyles = createGlobalStyle`
    * {
  box-sizing: border-box;
}



body , #root{
    min-width: 320px;
    margin: 0;
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

`;
