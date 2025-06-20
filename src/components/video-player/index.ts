import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';
import { VideoPlayerController, type PlayerKey } from '../../reactive-controllers/video-player-controller';
import YouTubePlayer from 'youtube-player';
import { VideoEventManager } from '../../event-managers';

@customElement('video-player')
export class VideoPlayer extends LitElement {
	@property({ type: String }) trackName: PlayerKey = 'track1';
	@property({ type: String }) videoId: string = '';
	private videoPlayerController = VideoPlayerController.getInstance(this);

	render(): TemplateResult {
		return html`
			<div class="video-slot" id=${this.trackName}></div>
		`;
	}

	static styles = [
		resetStyles,
		globalStyles,
		componentStyles
	];

	firstUpdated(): void {
		const playerElement: HTMLElement | null = this.renderRoot.querySelector(`#${this.trackName}`);
		if (!playerElement) {
			console.error(`Element with ID "${this.trackName}" not found.`);
			return;
		}
		const player = YouTubePlayer(playerElement, {
			playerVars: {
				autoplay: 0,
				controls: 0,         // Hide player controls
				modestbranding: 1,   // Reduce YouTube branding
				rel: 1,              // Don't show related videos at the end
				fs: 0,               // Disable fullscreen button
				disablekb: 1         // Disable keyboard controls
			}
		});
		this.videoPlayerController.addInitialPlayer(this.trackName, player);
	}

	updated(changedProperties: Map<string, unknown>): void {
		if (changedProperties.has('videoId')) {

			const playerElement: HTMLElement | null = this.renderRoot.querySelector(`#${this.trackName}`);
			if (!playerElement) return;
			if (this.videoId === '') {
				// hide the playerElement when video id is not set
				playerElement.style.opacity = '0';
				return;
			}

			playerElement.style.opacity = '';

			const player = this.videoPlayerController.getPlayerByPlayerKey(this.trackName);
			if (!player) return;

			this.videoPlayerController.loadVideoById(player, this.videoId)
				.then(() => {
					setTimeout(() => {
						VideoEventManager.dispatchVideoLoadedEvent({
							trackName: this.trackName,
						});
					}, 2000);
				}).catch(err => {
					console.error(`Failed to load video "${this.videoId}" for ${this.trackName}`, err);
				});
		}
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'video-player': VideoPlayer;
	}
}

