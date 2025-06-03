import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';

@customElement('speed-adjust-button-group')
export class SpeedAdjustButtonGroup extends LitElement {
	@property({ type: Number }) count = 0;

	render(): TemplateResult {
		return html`
			<nav class="speed-button-list">
				<speed-adjust-button speed="0.25x"></speed-adjust-button>
				<speed-adjust-button speed="0.5x"></speed-adjust-button>
				<speed-adjust-button speed="0.75x"></speed-adjust-button>
				<speed-adjust-button speed="1x"></speed-adjust-button>
			</nav>
			<nav class="speed-button-list">
				<speed-adjust-button speed="1.25x"></speed-adjust-button>
				<speed-adjust-button speed="1.5x"></speed-adjust-button>
				<speed-adjust-button speed="1.75x"></speed-adjust-button>
				<speed-adjust-button speed="2x"></speed-adjust-button>
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
		'speed-adjust-button-group': SpeedAdjustButtonGroup;
	}
}
