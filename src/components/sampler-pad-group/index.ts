import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';
import { KeyboardEventManager, VideoEventManager } from '../../event-managers';
import { VideoPlayerController, type PlayerKey } from '../../reactive-controllers/video-player-controller';
import type { VideoEventDetail, VideoEventType } from '../../event-managers/video-event-manager';

@customElement('sampler-pad-group')
export class SamplerPadGroup extends LitElement {
	@property({ type: String }) trackName: PlayerKey = 'track1';
	@property({ type: Array }) keys: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

	private videoPlayerController = VideoPlayerController.getInstance(this);

	@state()
	private activeKey: string | null = null;

	private onKey = (key: string, type: 'down' | 'up') => {
		if (type === 'down') {
			this.activeKey = key;
			this.setPlayerByKey(key);
			this.playFromQueuePoint(key);
		} else {
			this.activeKey = null;
		}
	};

	private setPlayerByKey = (key: string) => {
		const playerKey = this.videoPlayerController.getPlayerKeyByQueueKey(key);
		if (!playerKey) return;
		this.videoPlayerController.setLastPlayerKey(playerKey);
		VideoEventManager.dispatchVideoSwitchedEvent({ trackName: playerKey });
	};

	private playFromQueuePoint = (key: string) => {
		const player = this.videoPlayerController.getCurrentPlayer();
		if (!player) return;
		const queuePoints = this.videoPlayerController.getCurrentQueuePoints();
		if (!queuePoints) return;
		if (!Object.prototype.hasOwnProperty.call(queuePoints, key)) return;
		this.videoPlayerController.playFromSeekTime(player, Number(queuePoints[key])).catch(err => console.log(err));
	};

	private handleClickPad = (event: Event) => {
		const player = this.videoPlayerController.getCurrentPlayer();
		if (!player) return;

		const target = event.currentTarget as HTMLElement;
		const padName = target.getAttribute('padName');
		if (!padName) return;
		this.playFromQueuePoint(padName);
	};

	private handleSetDefaultQueuePoints = (type: VideoEventType, detail: VideoEventDetail) => {
		if (type !== 'video-loaded') return;
		const player = this.videoPlayerController.getPlayerByPlayerKey(detail.trackName);
		if (!player) return;
		this.videoPlayerController.setDefaultQueuePoints(detail.trackName, player).catch(err => console.log(err));
	};

	private handleSwitchPads = (type: VideoEventType, detail: VideoEventDetail) => {
		if (type !== 'track-switched') return;
		const player = this.videoPlayerController.getPlayerByPlayerKey(detail.trackName);
		if (!player) return;
		const keys = this.videoPlayerController.getKeysByPlayerKey(detail.trackName);
		this.keys = keys.split('');
	};

	connectedCallback(): void {
		super.connectedCallback();
		KeyboardEventManager.subscribe(this.onKey);
		VideoEventManager.subscribe(this.handleSetDefaultQueuePoints);
		VideoEventManager.subscribe(this.handleSwitchPads);
	}

	disconnectedCallback(): void {
		KeyboardEventManager.unsubscribe(this.onKey);
		super.disconnectedCallback();
	}

	render(): TemplateResult {
		return html`
			<nav class="sampler-pad-group">
				${this.keys.map((key) => html`
				<sampler-pad @click=${this.handleClickPad} padName=${key} ?active=${this.activeKey === key}></sampler-pad>
				`)}
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
		'sampler-pad-group': SamplerPadGroup;
	}
}
