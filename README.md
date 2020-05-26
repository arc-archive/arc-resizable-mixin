[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/arc-resizable-mixin.svg)](https://www.npmjs.com/package/@advanced-rest-client/arc-resizable-mixin)

[![Build Status](https://travis-ci.com/advanced-rest-client/arc-resizable-mixin.svg)](https://travis-ci.com/advanced-rest-client/arc-resizable-mixin)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/arc-resizable-mixin)

This mixin is a port of [iron-resizable-behavior](https://github.com/PolymerElements/iron-resizable-behavior) that works with any JavaScript class.

`ArcResizableMixin` is a mixin that can be used in web components to coordinate the flow of resize events between "resizers" (elements that control the size or hidden state of their children) and "resizables" (elements that need to be notified when they are resized or un-hidden by their parents in order to take action on their new measurements).

Elements that perform measurement should add the `ArcResizableMixin` mixin to their element definition and listen for the `iron-resize` event on themselves. This event will be fired when they become showing after having been hidden, when they are resized explicitly by another resizable, or when the window has been resized.

Note, the `iron-resize` event is non-bubbling.

## Installation

```bash
npm i @advanced-rest-client/arc-resizable-mixin
```

## Usage

```javascript
import { LitElement } from 'lit-element';
import { ArcResizableMixin } from '@advanced-rest-client/arc-resizable-mixin';

class ArcResizableImpl extends ArcResizableMixin(LitElement) {

}
```

## Development

```sh
git clone https://github.com/advanced-rest-client/arc-resizable-mixin
cd arc-resizable-mixin
npm install
```

### Running the demo locally

```sh
npm start
```

### Running the tests
```sh
npm test
```
