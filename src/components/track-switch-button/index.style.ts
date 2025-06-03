import { css } from 'lit';

export const componentStyles = css`

.track-button-container {
  text-align: center;
}

.track-button-label {
  color: #87857d;
  font-size: 9px;
}

.track-button {
  display: block;
  width: 48px;
  border-radius: 4px;
  background-color: #505b76;
  box-shadow: 0 3px 0 #263b4a;
  height: 16px;
  margin-top: 4px;
  cursor: pointer;
  transition: box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out;
}

.track-button:active {
  box-shadow: 0 1.5px 0 #263b4a;
  transform: translateY(1px);
}
`;
