import { css } from 'lit';

export const componentStyles = css`
.queue-point-adjust-container {
    height: 60px;
    position: relative;
    background: #34495e;
}

.queue-point-adjust-meter {
    height: 100%;
    border-right: 8px solid #e74c3c;
    position: relative;
    text-align: right;
}

.queue-point-adjust-meter-key {
    color: #bdc3c7;
    font-family: system-ui;
    font-size: 13px;
    position: absolute;
    bottom: -18px;
    text-transform: uppercase;
    font-weight: bold;
}

.queue-point-adjust {
    opacity: 0;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
}
`;
