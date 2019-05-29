import React from 'react';

import renderer from 'react-test-renderer';

import AppBar from '../AppBar';

describe('testing app bar', () => {
  test('should throw error with no title', () => {
    const instance = renderer.create(<AppBar />).toJSON();
    expect(instance).toMatchSnapshot();
  });

  test('should render correctly with title', () => {
    const instance = renderer.create(<AppBar title="olá" />).toJSON();
    expect(instance).toMatchSnapshot();
  });
});
