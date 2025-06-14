import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';
import { VideoPlayerController } from '../../reactive-controllers';

@customElement('record-button')
export class RecordButton extends LitElement {
	private videoPlayerController = VideoPlayerController.getInstance(this);

	handleOpenRecordModal = (_: Event): void => {
		this.videoPlayerController.setShowRecordModal(true);
	};

	render(): TemplateResult {
		return html`
		<div class="track-button-container">
			<span class="track-button-label">RECORD</span>
			<a @click=${this.handleOpenRecordModal} class="track-button"></a>
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
		'record-button': RecordButton;
	}
}
