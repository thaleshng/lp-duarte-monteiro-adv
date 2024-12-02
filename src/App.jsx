import { createGlobalStyle } from "styled-components"
import { MainContent } from "./components/main-content/MainContent"
import { Footer } from "./components/footer/Footer"
import { FloatButton } from "./components/buttons/FloatButton"

function App() {
  return (
    <>
      <GlobalStyle />
      <MainContent />
      <Footer />
      <FloatButton />
    </>
  )
}

export default App

export const GlobalStyle = createGlobalStyle`
  :root {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    --font-roboto: "Roboto", sans-serif;
    --font-poppins: "Poppins", sans-serif;

    --primary-font-color: #FCDA40;
    --secondary-font-color: #FFF04F;
    --white-font-color: #FFF;
    --black-font-color: #171717;

    --primary-bg-color: #171717;
    --secondary-bg-color: #FCDA40;

    --bg-color-button: #25D366;
    --bg-color-button-hover: #20B75D;
    --bg-color-button-hover-box-shadow: rgba(0, 128, 64, 0.6);

    --accordion-border-color: #D5D8DC;
    --accordion-bg-color-hover: #222;

    @keyframes scrolldown {
    0% {-webkit-transform: translateY(0); opacity: 0.4;}
    100% {-webkit-transform: translateY(0.4em); opacity: 0.9;}
  }
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;

    > a {
      text-decoration: none;
      color: #000
    }

    > button {
      background: none;
      border: none;
    }
  }
`
