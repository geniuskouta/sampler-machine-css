import { css } from 'lit';

export const componentStyles = css`
.speed-button-list {
    display: flex;
    justify-content: space-between;
	width: 246px;
}

.speed-button-list:nth-child(n + 2) {
	margin-top: 12px;
}
`;
