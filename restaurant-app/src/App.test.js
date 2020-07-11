import React from 'react';
import { render } from '@testing-library/react';
import App from './App';



test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test('API object assignment', () => {
  const list=null;
  fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                this.setState({list:result})
      })
    })
  const data = list;
  expect(data).toEqual(list);
});