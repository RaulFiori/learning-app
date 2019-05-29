import React from 'react';

import renderer from 'react-test-renderer';
import Title from '../Title';

it('renders correctly', () => {
  const tree = renderer.create(<Title>olá</Title>).toJSON();
  expect(tree).toMatchSnapshot();
});
