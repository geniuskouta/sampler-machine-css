import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, query, property } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';
import { VideoPlayerController, type PlayerKey } from '../../reactive-controllers/video-player-controller';

@customElement('volume-adjust')
export class VolumeAdjust extends LitElement {
	@property({ type: String }) trackName: PlayerKey = 'track1';
	private videoPlayerController = VideoPlayerController.getInstance(this);

	@query('#volume-adjust')
	private volumeInput!: HTMLInputElement;

	@query('#volume-adjust-indicator')
	private indicator!: HTMLDivElement;

	private handleInputStyle = () => {
		const value = parseFloat(this.volumeInput.value);
		const minBottom = 12; // 0
		const maxBottom = 154; // 100
		const step = (maxBottom - minBottom) / 100;
		const bottom = minBottom + (step * value);
		this.indicator.style.bottom = `${bottom}px`;
	};

	private handleInput = () => {
		const player = this.videoPlayerController.getCurrentPlayer();
		if (!player) return;
		this.videoPlayerController.setVolume(player, Number(this.volumeInput.value)).catch(err => { console.log(err); });
	};

	render(): TemplateResult {
		return html`
			<nav class="controller-content-volume">
				<span class="volume-adjust-meter-label">Volume</span>
				<div class="volume-adjust-meter">
					<div
						id="volume-adjust-indicator"
						class="volume-adjust-meter-indicator"
						style="bottom: 92px;"
					></div>
				</div>
				<input
					id="volume-adjust"
					class="volume-adjust"
					type="range"
					step="0.01"
					min="0"
					max="100"
					@input=${this.handleInputStyle}
					@change=${this.handleInput}
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
