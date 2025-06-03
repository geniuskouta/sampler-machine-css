import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';

@customElement('track-switch-button-group')
export class TrackSwitchButtonGroup extends LitElement {
	@property({ type: Number }) count = 0;

	render(): TemplateResult {
		return html`
			<nav class="track-switch-button-list">
				<track-switch-button trackName="TRACK1"></track-switch-button>
				<track-switch-button trackName="TRACK2"></track-switch-button>
				<track-switch-button trackName="TRACK3"></track-switch-button>
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
		'track-switch-button-group': TrackSwitchButtonGroup;
	}
}
