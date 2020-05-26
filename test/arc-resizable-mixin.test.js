import {fixture, assert, nextFrame} from '@open-wc/testing';

import '../arc-resizable-mixin.js';
import './test-elements.js';


describe('ArcResizableMixin', () => {
  let resizable;

  async function basicFixture() {
    return (fixture('<x-light-resizable></x-light-resizable>'));
  }

  describe('events across shadow boundaries', () => {
    beforeEach(async () => {
      resizable = await basicFixture();
      await nextFrame();
    });

    describe('ancestor\'s iron-resize', () => {
      it('only fires once for a notifying shadow descendent', async () => {
        const initialCount = resizable.ironResizeCount;
        const r1 = resizable.shadowRoot.querySelector('#childResizable1');
        r1.notifyResize();
        assert.equal(resizable.ironResizeCount - initialCount, 1);
      });

      it('only fires once when notifying descendent observables', () => {
        const initialCount = resizable.ironResizeCount;
        resizable.notifyResize();
        assert.equal(resizable.ironResizeCount - initialCount, 1);
      });
    });

    describe('descendant\'s iron-resize', () => {
      it('only fires once for a notifying shadow root', () => {
        const r1 = resizable.shadowRoot.querySelector('#childResizable1');
        const r2 = resizable.shadowRoot.querySelector('#childResizable2');
        const childResizable1InitialCount = r1.ironResizeCount;
        const childResizable2InitialCount = r2.ironResizeCount;
        resizable.notifyResize();
        assert.equal(r1.ironResizeCount - childResizable1InitialCount, 1);
        assert.equal(r2.ironResizeCount - childResizable2InitialCount, 1);
      });

      it('only fires once for a notifying descendent observable', () => {
        const r1 = resizable.shadowRoot.querySelector('#childResizable1');
        const initialCount = r1.ironResizeCount;
        r1.notifyResize();
        assert.equal(r1.ironResizeCount - initialCount, 1);
      });
    });

    describe('window\'s resize', () => {
      it('causes all iron-resize events to fire once', async () => {
        const rootInitialCount = resizable.ironResizeCount;
        const r1 = resizable.shadowRoot.querySelector('#childResizable1');
        const r2 = resizable.shadowRoot.querySelector('#childResizable2');
        const childResizable1InitialCount = r1.ironResizeCount;
        const childResizable2InitialCount = r2.ironResizeCount;
        window.dispatchEvent(new CustomEvent('resize'));
        await nextFrame();
        assert.equal(resizable.ironResizeCount - rootInitialCount, 1);
        assert.equal(r1.ironResizeCount - childResizable1InitialCount, 1);
        assert.equal(r2.ironResizeCount - childResizable2InitialCount, 1);
      });
    });
  });
});
