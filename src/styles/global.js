import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #edf2f7;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  a {
    color: #cb322b;
    text-decoration: none;
    font-family: 'Dosis', sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
  font-family: 'Roboto', sans-serif;
 
}
`

export default GlobalStyle
