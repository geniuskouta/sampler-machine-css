import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';
import { KeyboardManager } from '../../managers';

@customElement('track-control-button-group')
export class TrackControlButtonGroup extends LitElement {
	@property({ type: Boolean }) isPlaying = false;

	@state()
	private activeKey: string | null = null;

	private onKey = (key: string, type: 'down' | 'up') => {
		if (type === 'down') this.activeKey = key;
		else this.activeKey = null;
	};

	connectedCallback(): void {
		super.connectedCallback();
		KeyboardManager.subscribe(this.onKey);
	}

	disconnectedCallback(): void {
		KeyboardManager.unsubscribe(this.onKey);
		super.disconnectedCallback();
	}

	render(): TemplateResult {
		return html`
			<nav class="controller-content-track-functions">
				<record-button></record-button>
				<delete-button></delete-button>
				<stop-button ?active=${this.isPlaying && this.activeKey === ' '}></stop-button>
				<start-button ?active=${!this.isPlaying && this.activeKey === ' '}></start-button>
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
