import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, ::before, ::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body,#root{
    height: 100%;
}
html{
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
}
a{
    text-decoration: none;
    color: inherit;
}
body.dark{
    --heading-text: #a49dc2;
    --primary-text: #f5f5f8;
    --secondary-text: #7c7c7c;
    --nav-text: #b7ade1;
    --nav-text-active: #d1cbea;
    --primary-background: #161717;
    --secondary-background: #1b1b1b;
    --button-background: #bdb6d9;
    --button-hover-background: #bca6fd;
    --icon-color: #bdb6d9;
    --icon-hover: #ffffff;
    --box-shadow: #000;
    --loading-bar-bg: #afb1ec;
    --vibrant: #2ee59d;
}
body.light{
    --heading-text: #3b2f6e;
    --primary-text: #3b3066;
    --secondary-text: #5d5679;
    --nav-text: #a298cc;
    --nav-text-active: #252136;
    --primary-background: #fff9ff;
    --secondary-background: #fff;
    --button-background: #cec6f1;
    --button-hover-background: #a58dec;
    --icon-color: #493f72;
    --icon-hover: #8d6eeb;
    --box-shadow: #b9bbf8;
    --loading-bar-bg: #3b40db;
    --vibrant: #00b86e;
    .bg{
        opacity: 0.9;
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
.scrollbar-track{
    background-color: transparent !important;
}
.scrollbar-thumb{
    background-color: #ae94fc !important;
}
`;
export default GlobalStyles;
