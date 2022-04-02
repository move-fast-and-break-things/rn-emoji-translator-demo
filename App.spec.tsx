import React from 'react';
import renderer from 'react-test-renderer';

// @ts-ignore
import App from './App.tsx';

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    if (tree instanceof Array) {
      throw new Error('Expected a single root element');
    }
    expect(tree?.children?.length).toBe(4);
  });
});
