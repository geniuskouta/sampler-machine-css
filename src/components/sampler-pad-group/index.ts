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
			this.playFromQueuePoint(key);
		} else {
			this.activeKey = null;
		}
	};

	private playFromQueuePoint = (key: string) => {
		const player = this.videoPlayerController.getCurrentPlayer();
		if (!player) return;
		const queuePoints = this.videoPlayerController.getCurrentQueuePoints();
		if (!queuePoints) return;
		if (!Object.prototype.hasOwnProperty.call(queuePoints, key)) return;
		this.videoPlayerController.playFromSeekTime(player, Number(queuePoints[key])).catch(err => console.log(err));
	};

	private handleSetDefaultQueuePoints = (type: VideoEventType, _: VideoEventDetail) => {
		if (type !== 'video-loaded') return;
		const player = this.videoPlayerController.getCurrentPlayer();
		if (!player) return;
		this.videoPlayerController.setDefaultQueuePoints(this.trackName, player).catch(err => console.log(err));
	};

	connectedCallback(): void {
		super.connectedCallback();
		KeyboardEventManager.subscribe(this.onKey);
		VideoEventManager.subscribe(this.handleSetDefaultQueuePoints);
	}

	disconnectedCallback(): void {
		KeyboardEventManager.unsubscribe(this.onKey);
		super.disconnectedCallback();
	}

	render(): TemplateResult {
		return html`
			<nav class="sampler-pad-group">
				${this.keys.map((key) => html`
				<sampler-pad padName=${key} ?active=${this.activeKey === key}></sampler-pad>
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
