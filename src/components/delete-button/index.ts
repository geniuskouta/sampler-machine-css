import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';

@customElement('delete-button')
export class DeleteButton extends LitElement {
	render(): TemplateResult {
		return html`
		<div class="track-button-container">
			<span class="track-button-label">DELETE</span>
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
		'delete-button': DeleteButton;
	}
}
