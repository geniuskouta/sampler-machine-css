import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';
import { VideoPlayerController } from '../../reactive-controllers';

@customElement('record-modal')
export class RecordModal extends LitElement {
	private videoPlayerController = VideoPlayerController.getInstance(this);

	private get showRecordModal(): boolean {
		return this.videoPlayerController.getShowRecordModal();
	}

	handleChangeYoutubeUrl = (event: Event): void => {
		const target = event.target as HTMLInputElement;
		const value = target.value;
		const videoId = this.parseVideoIDFromURL(value);
		if (!videoId) return;

		const playerKey = this.videoPlayerController.getLastPlayerKey();
		this.videoPlayerController.setVideoId(playerKey, videoId);
	};

	handleCloseModal = (_: Event): void => {
		this.videoPlayerController.setShowRecordModal(false);
	};

	parseVideoIDFromURL(youtubeUrl: string): string | null {
		try {
			const url = new URL(youtubeUrl);
			let videoID: string | null = null;

			if ((url.hostname === 'www.youtube.com' || url.hostname === 'youtube.com') && url.pathname === '/watch') {
				videoID = url.searchParams.get('v');
			} else if (url.hostname === 'youtu.be') {
				videoID = url.pathname.slice(1);
			}

			if (!videoID) return null;

			const isValidID = /^[a-zA-Z0-9_-]{11}$/.test(videoID);
			return isValidID ? videoID : null;
		} catch {
			return null;
		}
	}

	render(): TemplateResult | null {
		return this.showRecordModal ? html`
		<div class="record-modal-backdrop">
		</div>

		<div class="record-modal">
			<div class="close-button-wrapper">
				<a class="close-button" @click=${this.handleCloseModal}>
					<svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 -960 960 960" fill="#505b76"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
				</a>
			</div>
			<div class="record-modal-content">
				<input
					@keydown=${(e: KeyboardEvent) => e.stopPropagation()}
					@keyup=${(e: KeyboardEvent) => e.stopPropagation()}
					@change=${this.handleChangeYoutubeUrl}
					name="youtube-url"
					class="youtube-url-input"
					type="text"
					placeholder="Paste youtube url"
				/>
			</div>
		</div>
	`: null;
	}

	static styles = [
		resetStyles,
		globalStyles,
		componentStyles
	];
}

declare global {
	interface HTMLElementTagNameMap {
		'record-modal': RecordModal;
	}
}
