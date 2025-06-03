import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';

@customElement('track-switch-button')
export class TrackSwitchButton extends LitElement {
	@property({ type: String }) trackName: string = 'TRACK1';

	render(): TemplateResult {
		return html`
		<div class="track-button-container">
			<span class="track-button-label">${this.trackName}</span>
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
		'track-switch-button': TrackSwitchButton;
	}
}
