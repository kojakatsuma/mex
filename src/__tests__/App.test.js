import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';


test('App test', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot();
})
