import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
  
  .App {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
  .ReactModal__Overlay--after-open{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
