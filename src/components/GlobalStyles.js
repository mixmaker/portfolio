import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
*, ::before, ::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    font-family: 'Montserrat', sans-serif;
}
body.dark{
    --heading-text: #a49dc2;
    --primary-text: #f5f5f8;
    --secondary-text: #7c7c7c;
    --primary-background: #1d2020;
    --secondary-background: #1c1d1d;
    --nav-background: #1a1c1d;
    --button-hover-background: #7c7ebb;
    --icon-color: #b9b2d6;
    --icon-hover: #bca6fd;
    --box-shadow: #000;
    --loading-bar-bg: #afb1ec;
    .bg{
        opacity: 0.8;
        @media only screen and (max-width: 768px) {
            opacity: 0.4;
        }
    }
}
body.light{
    --heading-text: #3b2f6e;
    --primary-text: #3b3066;
    --secondary-text: #5d5679;
    --primary-background: #fff9ff;
    --secondary-background: #fff;
    --nav-background: #fff;
    --button-hover-background: #ccceff;
    --icon-color: #493f72;
    --icon-hover: #8d6eeb;
    --box-shadow: #b9bbf8;
    --loading-bar-bg: #3b40db;
    .img-container::after{
        display: none;
    }
    .bg{
        opacity: 0.4;
    }
}
body{
    /* background-color: #fff9ff; //2a2d2e */
    background-color: var(--primary-background);
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    transition: 1s;
}
button, input[type='submit']{
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
    border-radius: 5px;
    transition: .5s;
}
.scrollbar-thumb{
    background-color: #ae94fc !important;
}
`;
export default Globalstyles;
