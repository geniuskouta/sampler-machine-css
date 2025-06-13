import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';
import { VideoPlayerController } from '../../reactive-controllers';
import type { PlayerKey } from '../../reactive-controllers/video-player-controller';

@customElement('video-player-group')
export class VideoPlayerGroup extends LitElement {
	private videoPlayerController = VideoPlayerController.getInstance(this);

	private get videoIds(): Map<PlayerKey, string | null> {
		return this.videoPlayerController.getVideoIds();
	}

	private get playerKeys(): PlayerKey[] {
		return this.videoPlayerController.getPlayerKeys();
	}

	private get selectedIndex(): number {
		const lastKey = this.videoPlayerController.value.lastPlayerKey;
		return lastKey ? this.playerKeys.indexOf(lastKey) : 0;
	}

	private videoHeight = 180;

	render(): TemplateResult {
		return html`
			<div class="video-slot-container">
				<ul class="video-list" style="transform: translateY(-${this.selectedIndex * this.videoHeight}px);">
					${this.playerKeys.map(key => html`
					<li class="video-item">
						<video-player trackName=${key} videoId=${this.videoIds.get(key)}></video-player>
					</li>
					`)}
				</ul>
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
		'video-player-group': VideoPlayerGroup;
	}
}
