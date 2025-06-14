import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';
import { VideoPlayerController } from '../../reactive-controllers';
import type { PlayerKey } from '../../reactive-controllers/video-player-controller';
import { VideoEventManager } from '../../event-managers';
import type { VideoEventDetail, VideoEventType } from '../../event-managers/video-event-manager';

@customElement('track-switch-button-group')
export class TrackSwitchButtonGroup extends LitElement {

	private videoPlayerController = VideoPlayerController.getInstance(this);

	private get playerKeys(): PlayerKey[] {
		return this.videoPlayerController.getPlayerKeys();
	}

	@state()
	private activePlayerKey: PlayerKey = this.videoPlayerController.getLastPlayerKey();

	handleClickTrack = (event: Event): void => {
		const target = event.currentTarget as HTMLElement;
		const trackName = target.getAttribute('trackName');
		if (!trackName) return;
		const playerKey = trackName.toLowerCase() as PlayerKey;
		this.videoPlayerController.setLastPlayerKey(playerKey);
		VideoEventManager.dispatchVideoSwitchedEvent({
			trackName: playerKey
		});
	};

	handleVideoSwitched = (eventType: VideoEventType, detail: VideoEventDetail): void => {
		if (eventType === 'track-switched')
			this.activePlayerKey = detail.trackName;
	};

	connectedCallback(): void {
		super.connectedCallback();
		VideoEventManager.subscribe(this.handleVideoSwitched);
	}

	render(): TemplateResult {
		return html`
			<nav class="track-switch-button-list">
				${this.playerKeys.map(key => html`<track-switch-button @click=${this.handleClickTrack} trackName=${key.toUpperCase()} .active=${key === this.activePlayerKey}></track-switch-button>`)}
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
		'track-switch-button-group': TrackSwitchButtonGroup;
	}
}
