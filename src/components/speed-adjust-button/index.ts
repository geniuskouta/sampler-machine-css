import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';

@customElement('speed-adjust-button')
export class SpeedAdjustButton extends LitElement {
	@property({ type: Number }) speed: number = 1;

	render(): TemplateResult {
		return html`
		<div class="speed-button-container">
			<span class="speed-button-label">${this.speed}x</span>
			<a class="speed-button"></a>
		</div>
	`;
	}

	static styles = [
		resetStyles,
		globalStyles,
		componentStyles
	];
}

declare global {
	interface HTMLElementTagNameMap {
		'speed-adjust-button': SpeedAdjustButton;
	}
}
