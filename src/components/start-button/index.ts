import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';

@customElement('start-button')
export class StartButton extends LitElement {

	render(): TemplateResult {
		return html`
		<div class="track-button-container">
			<span class="track-button-label">START</span>
			<a class="track-button"></a>
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
		'start-button': StartButton;
	}
}
