import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';
import { VideoPlayerController } from '../../reactive-controllers';
import type { PlayerKey } from '../../reactive-controllers/video-player-controller';
import { VideoEventManager } from '../../event-managers';

@customElement('track-switch-button-group')
export class TrackSwitchButtonGroup extends LitElement {

	private videoPlayerController = VideoPlayerController.getInstance(this);

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

	render(): TemplateResult {
		return html`
			<nav class="track-switch-button-list">
				<track-switch-button @click=${this.handleClickTrack} trackName="TRACK1"></track-switch-button>
				<track-switch-button @click=${this.handleClickTrack} trackName="TRACK2"></track-switch-button>
				<track-switch-button @click=${this.handleClickTrack} trackName="TRACK3"></track-switch-button>
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
