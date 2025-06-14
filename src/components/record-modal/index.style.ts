import { css } from 'lit';

export const componentStyles = css`

.record-modal-backdrop {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
}

.record-modal {
	position: absolute;
	top: calc(50% - 200px);
	left: 0;
	right: 0;
	display: block;
	margin: 0 auto;
	width: 320px;
}

.record-modal-content {
	padding: 10px 10px 16px;
}

.youtube-url-input {
	color: #2d3436;
    display: block;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    border: none;
    padding: 4px 8px;
	background-color: #dbd7cc;
	box-shadow: 4px 4px 0 #95a5a6;
}

.youtube-url-input:focus {
	border: none;
	outline: none;
}

.close-button-wrapper {
	display: relative;
}

.close-button {
	position: absolute;
	right: 0;
	top: 0;
	background-color: #bdc3c7;
	border-radius: 100%;
	display: inline-flex;
	width: 28px;
	height: 28px;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	box-shadow: 0 1px 12px rgba(0, 0, 0, 0.2);
}
`;


