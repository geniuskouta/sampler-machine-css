import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';
import { VideoPlayerController } from '../../reactive-controllers/video-player-controller';
import { VideoEventManager } from '../../event-managers';
import type { VideoEventDetail, VideoEventType } from '../../event-managers/video-event-manager';

@customElement('volume-adjust')
export class VolumeAdjust extends LitElement {
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

	private setInitialVolume = (type: VideoEventType, _: VideoEventDetail) => {
		if (!['track-switched', 'video-loaded'].includes(type)) return;
		const player = this.videoPlayerController.getCurrentPlayer();
		if (!player) return;
		this.videoPlayerController.getVolume(player).then((volume) => {
			this.volumeInput.value = String(volume);
			this.handleInputStyle();
		}).catch(err => console.log(err));
	};

	connectedCallback(): void {
		super.connectedCallback();
		VideoEventManager.subscribe(this.setInitialVolume);
	}

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
