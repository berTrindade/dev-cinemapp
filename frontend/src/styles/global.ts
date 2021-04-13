
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --golden: #dfad31;
        --white: #fff;
        --concrete: #f3f3f3;
        --background: #f2f3f5;
        --gray: #dcdde0;
        --grayish: #ccc;
        --mine-shaft: #666666;
        --red: #e83f5d;
        --green: #4cd62b;
        --blue: #5965e0;
        --blue-dark: #4953b8;
        --blue-twitter: #2aa9e0;
    }

    @media(max-width: 1080px) {
        html {
            /* 16 x 0.9375 = minus 1 pixel with rem measurement */
            font-size: 93.75%; 
        }
    }

    @media(max-width: 720px) {
        html {
            /* 14 x 0.9375 = minus 1 pixel with rem measurement */
            font-size: 87.5%; 
        }
    }

    body {
        background-color: var(--background);
        color: var(--text);
    }

    body, input, button {
        font: 400 1rem "Inter", sans-serif;    
    }

    button {
        cursor:pointer;    
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .container {
        max-width: 992px;
        margin: 0 auto;
    }
`;