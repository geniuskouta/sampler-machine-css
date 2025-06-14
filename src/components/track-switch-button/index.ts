import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';
import { classMap } from 'lit/directives/class-map.js';

@customElement('track-switch-button')
export class TrackSwitchButton extends LitElement {
	@property({ type: String }) trackName: string = 'TRACK1';
	@property({ type: Boolean }) active: boolean = false;

	render(): TemplateResult {
		const trackButtonClasses = {
			'track-button': true,
			'track-button-active': this.active
		};
		return html`
		<div class="track-button-container">
			<span class="track-button-label">${this.trackName}</span>
			<a class=${classMap(trackButtonClasses)}></a>
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
