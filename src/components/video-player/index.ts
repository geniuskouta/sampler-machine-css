import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';
import { VideoPlayerController, type PlayerKey } from '../../reactive-controllers/video-player-controller';
import YouTubePlayer from 'youtube-player';

@customElement('video-player')
export class VideoPlayer extends LitElement {
	@property({ type: String }) trackName: PlayerKey = 'track1';
	@property({ type: String }) videoId: string = 'YQwTOpvcTYU';

	private videoPlayerController = VideoPlayerController.getInstance(this);

	render(): TemplateResult {
		return html`
			<div class="video-slot-container">
				<div class="video-slot" id=${this.trackName}></div>
          	</div>
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
				controls: 0,         // Hide player controls
				modestbranding: 1,   // Reduce YouTube branding
				rel: 0,              // Don't show related videos at the end
				fs: 0,               // Disable fullscreen button
				disablekb: 1         // Disable keyboard controls
			}
		});

		this.videoPlayerController.addPlayer(this.trackName, player);

		player.loadVideoById(this.videoId).catch(err => { console.log(err); });
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'video-player': VideoPlayer;
	}
}

