import { LitElement, html } from 'lit-element';
import { ArcResizableMixin } from '../arc-resizable-mixin.js';

class Xresizable extends ArcResizableMixin(LitElement) {
  render() {
    return html`<p>x-resizable</p>`;
  }
}
window.customElements.define('x-resizable', Xresizable);
