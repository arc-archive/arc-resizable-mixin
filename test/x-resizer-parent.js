import { LitElement, html } from 'lit-element';
import { ArcResizableMixin } from '../arc-resizable-mixin.js';

class XResizerParent extends ArcResizableMixin(LitElement) {
  render() {
    return html`<p>x-resizer-parent</p>`;
  }
}
window.customElements.define('x-resizer-parent', XResizerParent);
