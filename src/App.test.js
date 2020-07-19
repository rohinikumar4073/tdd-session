import App from './App';

import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import TestUtils from 'react-dom/test-utils';
let container;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('Test adding will add the list', function () {
  act(() => {
    ReactDOM.render(<App />, container);
  });
  let input = container.querySelector('input');
  expect(input.value).toBe('');
  TestUtils.Simulate.change(input, { target: { value: 'Get Milk' } });
  let button = container.querySelector('button.add');
  TestUtils.Simulate.click(button);
  let liElements = document.querySelectorAll('li');
  expect(liElements.length).toBe(1);
})
test('Test deleting the list', function () {
  act(() => {
    ReactDOM.render(<App toDoList={[{id:1,value:'hi'}]} />, container);
  });
 
  let button = container.querySelector('button.delete');
  TestUtils.Simulate.click(button);
  let liElements = document.querySelectorAll('li');
  expect(liElements.length).toBe(0);
})
test('Test stirkeing of from the list', function () {
  act(() => {
    ReactDOM.render(<App toDoList={[{id:1,value:'hi'}]} />, container);
  });
 
  let button = container.querySelector('button.done');
  TestUtils.Simulate.click(button);
  let spanElem = document.querySelectorAll('li span');
  expect(spanElem[0].style.textDecoration).toBe('line-through');
})