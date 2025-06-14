import { css } from 'lit';

export const componentStyles = css`
.controller-content-volume {
	writing-mode: vertical-lr;
	direction: rtl;
	cursor: pointer;
	position: relative;
	width: 60px;
	height: 180px;
	border: 1px solid #a7a59a;
	border-radius: 2px;
	text-align: center;
}

.volume-adjust-meter {
	writing-mode: horizontal-tb;
	width: 100%;
	height: 100%;
	padding: 12px 0;
	position: relative;
}

.controller-content-volume::before {
	content: "";
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 12px;
	margin: 0 auto;
	height: calc(100% - 24px);
	width: calc(100% - 16px);
	background: repeating-linear-gradient(
		to bottom,
		#a7a59a,
		#a7a59a 1px,
		transparent 1px,
		transparent 16px
	);
}

.volume-adjust-meter-indicator {
	background-color: #dacba6;
	position: absolute;
	display: block;
	height: 18px;
	width: 40px;
	border-radius: 4px;
	box-shadow: 0 4px 0 #c4b694;
	margin: 0 auto;
	padding-top: 6px;
	padding-left: 2px;
	left: 0;
	right: 0;
}

.volume-adjust-meter-indicator::before {
	content: "";
	display: block;
	height: 2px;
	background-color: #31384c;
	box-shadow: inset 0 1px 0 #6f778d, inset 1px 0 0 #6f778d;
}

.volume-adjust-meter::before {
	content: "";
	display: inline-block;
	width: 6px;
	background-color: #1c181d;
	box-shadow: inset 1.5px 0 0 rgba(255, 255, 255, 0.5),
		4px 0 0 #dbd7cc, -4px 0 0 #dbd7cc;
	height: 100%;
}

.volume-adjust {
	opacity: 0;
	position: absolute;
	display: block;
	height: calc(100% - 24px);
	top: 0;
	left: 0;
	right: 0;
	bottom: 12px;
	cursor: pointer;
}

.volume-adjust-meter-label {
	color: #87857d;
	writing-mode: horizontal-tb;
	position: absolute;
	font-size: 11px;
	display: block;
	top: -6px;
	left: 0;
	right: 0;
	margin: 0 auto;
	text-align: center;
	width: 42px;
	height: 38px;
	background-color: #dbd7cc;
}
`;
