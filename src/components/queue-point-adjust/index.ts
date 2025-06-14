import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';
import { VideoPlayerController } from '../../reactive-controllers';
import { KeyboardEventManager, VideoEventManager } from '../../event-managers';
import type { VideoEventDetail, VideoEventType } from '../../event-managers/video-event-manager';

@customElement('queue-point-adjust')
export class QueuePointAdjust extends LitElement {
	private videoPlayerController = VideoPlayerController.getInstance(this);

	private get player() {
		return this.videoPlayerController.getCurrentPlayer();
	}

	private get playerDuration() {
		const lastPlayerKey = this.videoPlayerController.getLastPlayerKey();
		return this.videoPlayerController.getCachedDurationByPlayerKey(lastPlayerKey);
	}

	@query('#queue-point-adjust')
	private queuePointAdjust!: HTMLInputElement;

	@query('#queue-point-adjust-meter')
	private queuePointAdjustMeter!: HTMLDivElement;

	@query('#queue-point-adjust-meter-key')
	private queuePointMeterKey!: HTMLDivElement;

	updateQueuePointStyle = (startPoint: number): void => {
		if (!this.player) return;

		const lastQueueKey = this.videoPlayerController.getLastQueueKey();
		if (!lastQueueKey) return;

		const queuePoints = this.videoPlayerController.getCurrentQueuePoints();
		if (!queuePoints || !Object.prototype.hasOwnProperty.call(queuePoints, lastQueueKey)) return;
		const duration = this.playerDuration;

		this.queuePointAdjustMeter.style.width = `${(startPoint / duration) * 100}%`;
		this.queuePointMeterKey.textContent = lastQueueKey;
	};

	handleInputQueuePoint = (event: Event): void => {
		const target = event.currentTarget as HTMLInputElement;
		this.updateQueuePointStyle(Number(target.value));
	};

	onKey = (key: string, type: 'down' | 'up'): void => {
		if (type === 'down') {
			const playerKey = this.videoPlayerController.getPlayerKeyByQueueKey(key);
			if (!playerKey) return;
			const queuePoints = this.videoPlayerController.getQueuePointsByPlayerKey(playerKey);
			if (!queuePoints) return;
			this.updateQueuePointAdjustValue(queuePoints[key]);
			this.updateQueuePointStyle(queuePoints[key]);
		}
	};

	handleUpdateQueuePointAdjustMax = (type: VideoEventType, _: VideoEventDetail): void => {
		if (!['video-loaded', 'track-switched'].includes(type)) return;
		if (!this.player) return;
		const duration = this.playerDuration;
		if (this.queuePointAdjust && duration > 0) {
			this.queuePointAdjust.max = String(duration);
		}
	};

	handleChangeQueuePoint = (event: Event): void => {
		const target = event.currentTarget as HTMLInputElement;
		this.videoPlayerController.updateLastQueuePoint(Number(target.value));
	};

	updateQueuePointAdjustValue(newValue: number): void {
		if (!this.player) return;

		if (this.queuePointAdjust) {
			this.queuePointAdjust.value = String(newValue);
		}
	}

	handlePadPointerdown = (type: VideoEventType, detail: VideoEventDetail): void => {
		if (type !== 'pad-pointerdown') return;
		const playerKey = detail.trackName;
		console.log(playerKey);
		const queuePoints = this.videoPlayerController.getQueuePointsByPlayerKey(playerKey);
		if (!queuePoints) return;
		const lastQueueKey = this.videoPlayerController.getLastQueueKey();
		if (!lastQueueKey) return;
		this.updateQueuePointAdjustValue(queuePoints[lastQueueKey]);
		this.updateQueuePointStyle(queuePoints[lastQueueKey]);
	};

	connectedCallback(): void {
		super.connectedCallback();
		KeyboardEventManager.subscribe(this.onKey);
		VideoEventManager.subscribe(this.handleUpdateQueuePointAdjustMax);
		VideoEventManager.subscribe(this.handlePadPointerdown);
	}

	disconnectedCallback(): void {
		KeyboardEventManager.unsubscribe(this.onKey);
		super.disconnectedCallback();
	}

	render(): TemplateResult {
		return html`
		<div class="queue-point-adjust-container">
				<div class="queue-point-adjust-meter" id="queue-point-adjust-meter" style="width: 0px;">
					<span class="queue-point-adjust-meter-key" id="queue-point-adjust-meter-key"></span>
				</div>
				<input class="queue-point-adjust" type="range" @input=${this.handleInputQueuePoint} @change=${this.handleChangeQueuePoint} id="queue-point-adjust" step="0.01" max="100">
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
		'queue-point-adjust': QueuePointAdjust;
	}
}
