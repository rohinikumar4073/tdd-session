import ToDoComponent from './ToDoComponent';

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
test('Test for fields rendering', function () {
    act(() => {
        ReactDOM.render(<ToDoComponent />, container);
    });
    const isLabelPresent = container.querySelector('label');
    expect(isLabelPresent).not.toBeUndefined();
});

test('Test for input  change', function () {
    act(() => {
        ReactDOM.render(<ToDoComponent />, container);
    });
    let input = container.querySelector('input');
    expect(input.value).toBe('');
    TestUtils.Simulate.change(input, { target: { value: 'Get Milk' } });
    expect(input.value).toBe('Get Milk');

});

test('Test for button  click ', function () {
    let addToDo =jest.fn();
    act(() => {
        ReactDOM.render(<ToDoComponent addToDo= {addToDo}/>, container);
    });
    let button = container.querySelector('button');
    let input = container.querySelector('input');
    TestUtils.Simulate.change(input, { target: { value: 'Get Milk' } });
    TestUtils.Simulate.click(button);
    expect(addToDo).toHaveBeenCalled();
    expect(addToDo).toHaveBeenCalledWith('Get Milk');

});

