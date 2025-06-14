import { css } from 'lit';

export const componentStyles = css`
.sampler-pad {
  font-family: system-ui;
  color: #dbd7cc;
  display: inline-flex;
  font-size: 13px;
  font-weight: bold;
  background-color: #a19e9a;
  width: 84px;
  height: 84px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 4px 0 rgb(99, 110, 114);
  transition: box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out, color 0.1s ease-in-out;
}

.sampler-pad:active,
:host([active]) .sampler-pad {
  color: #e1b12c;
  box-shadow: 0 2px 0 rgba(225, 177, 44, 0.85);
  transform: translateY(2px);
}
`;
