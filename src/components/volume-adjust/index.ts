import { LitElement, css, html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';

@customElement('volume-adjust')
export class VolumeAdjust extends LitElement {
	@property({ type: Number }) count = 0;

	render(): TemplateResult {
		return html`
			<nav class="controller-content-volume">
				<span class="volume-adjust-meter-label">Volume</span>
				<div class="volume-adjust-meter">
					<div
						class="volume-adjust-meter-indicator"
						style="bottom: 92px;"
					></div>
				</div>
				<input
					class="volume-adjust"
					type="range"
					step="0.01"
				/>
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
		'volume-adjust': VolumeAdjust;
	}
}
