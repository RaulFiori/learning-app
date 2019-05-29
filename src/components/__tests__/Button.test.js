import React from 'react';

import renderer from 'react-test-renderer';
import Button from '../Button';

it('renders correctly', () => {
  const tree = renderer.create(<Button>olá</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
