import { css } from 'lit';

export const componentStyles = css`

.track-button-container {
	text-align: center;
}

.track-button {
	display: block;
    width: 48px;
    height: 34px;
    border-radius: 4px;
    background-color: #f7e9d0;
    box-shadow: 0 4px 0 #c6beae;
    margin-top: 4px;
    cursor: pointer;
    transition: box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out;
}

.track-button-label {
    color: #87857d;
    font-size: 9px;
}

.track-button:active {
    box-shadow: 0 2px 0 #c6beae;
    transform: translateY(2px);
}
`;


