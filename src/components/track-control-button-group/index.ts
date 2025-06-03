import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';

@customElement('track-control-button-group')
export class TrackControlButtonGroup extends LitElement {
	@property({ type: Number }) count = 0;

	render(): TemplateResult {
		return html`
			<nav class="controller-content-track-functions">
				<record-button></record-button>
				<delete-button></delete-button>
				<stop-button></stop-button>
				<start-button></start-button>
			</nav>
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
		'track-control-button-group': TrackControlButtonGroup;
	}
}
