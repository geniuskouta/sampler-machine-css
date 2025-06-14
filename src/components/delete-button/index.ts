import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';
import { VideoPlayerController } from '../../reactive-controllers';

@customElement('delete-button')
export class DeleteButton extends LitElement {

	private videoPlayerController = VideoPlayerController.getInstance(this);

	handleClickDelete = (_: Event): void => {
		const player = this.videoPlayerController.getCurrentPlayer();
		if (!player) return;
		this.videoPlayerController.loadVideoById(player, '').catch(err => console.log(err));
		const playerKey = this.videoPlayerController.getLastPlayerKey();
		this.videoPlayerController.setVideoId(playerKey, '');
	};

	render(): TemplateResult {
		return html`
		<div class="track-button-container">
			<span class="track-button-label">DELETE</span>
			<a class="track-button" @click=${this.handleClickDelete}></a>
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
		'delete-button': DeleteButton;
	}
}
