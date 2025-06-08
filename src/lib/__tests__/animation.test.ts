import { describe, it, expect, vi } from 'vitest';
import { fadeOnScroll } from '../animation';

function createNode() {
  const el = document.createElement('div');
  document.body.appendChild(el);
  return el;
}

describe('fadeOnScroll', () => {
  it('returns update and destroy functions', () => {
    const node = createNode();
    const action = fadeOnScroll(node);
    expect(action).toHaveProperty('update');
    expect(action).toHaveProperty('destroy');
    action.destroy();
    node.remove();
  });
});
