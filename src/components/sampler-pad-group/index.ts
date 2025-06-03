import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resetStyles, globalStyles } from '../../styles';
import { componentStyles } from './index.style';

@customElement('sampler-pad-group')
export class SamplerPadGroup extends LitElement {
	@property({ type: Number }) count = 0;

	render(): TemplateResult {
		return html`
			<nav class="sampler-pad-group">
				<sampler-pad padName="q"></sampler-pad>
				<sampler-pad padName="w"></sampler-pad>
				<sampler-pad padName="e"></sampler-pad>
				<sampler-pad padName="r"></sampler-pad>
				<sampler-pad padName="t"></sampler-pad>
				<sampler-pad padName="y"></sampler-pad>
				<sampler-pad padName="u"></sampler-pad>
				<sampler-pad padName="i"></sampler-pad>
				<sampler-pad padName="o"></sampler-pad>
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
