import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #fff;
        color: #FFF;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }
    
    .react-modal-content {
        position: relative;
        margin: 0 auto;
        width: 100%;
        max-width: 728px;
        background: #F0F0F5;
        color: #000000;
        border-radius: 8px;
        border: none;
    }

    .react-modal-overlay {
        background-color: #121214e6;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width:1080px) {
        .react-modal-content {
            h1 {
                font-size: 26px;
            }

            input, button {
                font-size: 14px;
            }
        }

        .react-modal-overlay {
            padding: 0 20px;
        }
    }
`;
