import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';
import { VideoPlayerController } from '../../reactive-controllers';

@customElement('speed-adjust-button-group')
export class SpeedAdjustButtonGroup extends LitElement {
	@property({ type: Number }) count = 0;
	private videoPlayerController = VideoPlayerController.getInstance(this);

	private handleSetPlaybackRate = async (event: Event) => {
		const player = this.videoPlayerController.getCurrentPlayer();
		if (!player) return;

		const target = event.currentTarget as HTMLElement;
		const speedString = target.getAttribute('speed');
		if (!speedString) return;
		const speed = parseFloat(speedString);
		if (isNaN(speed)) return;

		await this.videoPlayerController.setPlaybackRate(player, speed);
	};

	render(): TemplateResult {
		return html`
			<nav class="speed-button-list">
				<speed-adjust-button @click=${this.handleSetPlaybackRate} speed="0.25"></speed-adjust-button>
				<speed-adjust-button @click=${this.handleSetPlaybackRate} speed="0.5"></speed-adjust-button>
				<speed-adjust-button @click=${this.handleSetPlaybackRate} speed="0.75"></speed-adjust-button>
				<speed-adjust-button @click=${this.handleSetPlaybackRate} speed="1"></speed-adjust-button>
			</nav>
			<nav class="speed-button-list">
				<speed-adjust-button @click=${this.handleSetPlaybackRate} speed="1.25"></speed-adjust-button>
				<speed-adjust-button @click=${this.handleSetPlaybackRate} speed="1.5"></speed-adjust-button>
				<speed-adjust-button @click=${this.handleSetPlaybackRate} speed="1.75"></speed-adjust-button>
				<speed-adjust-button @click=${this.handleSetPlaybackRate} speed="2"></speed-adjust-button>
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
