import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';
import { KeyboardEventManager } from '../../event-managers';
import { VideoPlayerController } from '../../reactive-controllers';
import type { YouTubePlayer } from 'youtube-player/dist/types';

@customElement('track-control-button-group')
export class TrackControlButtonGroup extends LitElement {

	private videoPlayerController = VideoPlayerController.getInstance(this);

	@state()
	private activeKey: string | null = null;

	@state()
	private isPlaying: boolean = false;

	private onKey = async (key: string, type: 'down' | 'up') => {
		if (type === 'down') {
			this.activeKey = key;
			await this.toggleVideoBySpaceKey(key);
		} else {
			this.activeKey = null;
		}
	};

	async toggleVideoPlayer(player: YouTubePlayer): Promise<void> {
		const isCurrentlyPlaying = await this.videoPlayerController.getIsPlaying(player);

		if (isCurrentlyPlaying) {
			await this.videoPlayerController.pauseVideo(player);
		} else {
			await this.videoPlayerController.playVideo(player);
		}

		this.isPlaying = isCurrentlyPlaying;
	}

	async toggleVideoBySpaceKey(key: string): Promise<void> {
		const currentPlayer = this.videoPlayerController.getCurrentPlayer();
		if (!currentPlayer) return;

		if (key === ' ') {
			await this.toggleVideoPlayer(currentPlayer);
		}
	}

	private handleClickPlayVideo = async (): Promise<void> => {
		const player = this.videoPlayerController.getCurrentPlayer();
		if (!player) return;
		await this.videoPlayerController.playVideo(player);
	};

	private handleClickPauseVideo = async (): Promise<void> => {
		const player = this.videoPlayerController.getCurrentPlayer();
		if (!player) return;
		await this.videoPlayerController.pauseVideo(player);
	};

	connectedCallback(): void {
		super.connectedCallback();
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		KeyboardEventManager.subscribe(this.onKey);
	}

	disconnectedCallback(): void {
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		KeyboardEventManager.unsubscribe(this.onKey);
		super.disconnectedCallback();
	}

	render(): TemplateResult {
		return html`
			<nav class="controller-content-track-functions">
				<record-button></record-button>
				<delete-button></delete-button>
				<stop-button @click=${this.handleClickPauseVideo} ?active=${this.isPlaying && this.activeKey === ' '}></stop-button>
				<start-button @click=${this.handleClickPlayVideo} ?active=${!this.isPlaying && this.activeKey === ' '}></start-button>
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
		'track-control-button-group': TrackControlButtonGroup;
	}
}
