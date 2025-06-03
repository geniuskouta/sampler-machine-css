import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';

@customElement('video-player')
export class VideoPlayer extends LitElement {
	render(): TemplateResult {
		return html`
			<div class="video-slot-container" player-container-id="player-a">
            	<iframe class="video-slot" player-id="player-b" id="player-b" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" title="East Of Underground -  I Love You" width="320" height="90" src="https://www.youtube.com/embed/seARsMwjbEU?si=AOUpF9DDAEX9Bjx9"></iframe>
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
		'video-player': VideoPlayer;
	}
}
