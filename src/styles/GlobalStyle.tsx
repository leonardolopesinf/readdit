import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html{
        font-family: 'Mulish', sans-serif;
        font-size: 62.5%;
        font-weight: lighter;
        color: ${(props) => props.theme.colors.text};
        background-color: ${(props) => props.theme.colors.background};

        @media(max-width: 1024px){
            font-size: 52.5%
        }

        @media(max-width: 768px){
            font-size: 35%
        }

        @media(max-width:425px){
            font-size: 26%
        }
  
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style-type: none;
    }

    .Toastify__toast-body {
        font-weight: 600;
        font-size: 1.3rem;
    }
`;

export default GlobalStyle;
