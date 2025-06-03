import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';

@customElement('sampler-pad')
export class SamplerPad extends LitElement {
	@property({ type: String }) padName: string = '1';

	render(): TemplateResult {
		return html`
		<a class="sampler-pad">${this.padName}</a>
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
		'sampler-pad': SamplerPad;
	}
}
