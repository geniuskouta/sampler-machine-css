import { css } from 'lit';

export const componentStyles = css`

.speed-button-container {
    display: inline-block;
    width: 50px;
}

.speed-button-label {
    font-family: system-ui;
    font-size: 9px;
    display: block;
    color: #dacba6;
    background-color: #87857d;
    padding: 1.5px 3px;
    width: 32px;
    text-align: center;
    margin: 0 auto;
    border-radius: 2px;
}

.speed-button {
    display: block;
    height: 16px;
    background-color: #dacba6;
    box-shadow: 0 3px 0 #c4b694;
    border-radius: 16px;
    transition: box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out;
    cursor: pointer;
    margin-top: 4px;
}

.speed-button:active {
    box-shadow: 0 1.5px 0 #c4b694;
    transform: translateY(1px);
}

`;
