import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';
import { KeyboardEventManager } from '../../event-managers';

@customElement('sampler-pad-group')
export class SamplerPadGroup extends LitElement {
	@property({ type: Array }) keys: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

	@state()
	private activeKey: string | null = null;

	private onKey = (key: string, type: 'down' | 'up') => {
		if (type === 'down') this.activeKey = key;
		else this.activeKey = null;
	};

	connectedCallback(): void {
		super.connectedCallback();
		KeyboardEventManager.subscribe(this.onKey);
	}

	disconnectedCallback(): void {
		KeyboardEventManager.unsubscribe(this.onKey);
		super.disconnectedCallback();
	}

	render(): TemplateResult {
		return html`
			<nav class="sampler-pad-group">
				${this.keys.map((key) => html`
				<sampler-pad padName=${key} ?active=${this.activeKey === key}></sampler-pad>
				`)}
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
		'sampler-pad-group': SamplerPadGroup;
	}
}
