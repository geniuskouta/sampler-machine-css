import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';

@customElement('record-button')
export class RecordButton extends LitElement {
	@property({ type: String }) speed: string = '1x';

	render(): TemplateResult {
		return html`
		<div class="track-button-container">
			<span class="track-button-label">RECORD</span>
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
		'record-button': RecordButton;
	}
}
