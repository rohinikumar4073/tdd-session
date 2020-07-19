import List from './List';

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
test("Test for the list component to have correct length", function () {
    act(() => {
        ReactDOM.render(<List toDoList={[
            { id: '1', value: 'Get Milk' },
            { id: '2', value: 'Get Groceries' },
            { id: 3, value: "Get WaterBootle" },
            { id: 4, value: "Get WaterBootle" }]} />, container);
    });
    let liElements = container.querySelectorAll('li');
    expect(liElements.length).toBe(4)
})
test("Test for the list component to each component has delete done", function () {
    act(() => {
        ReactDOM.render(<List toDoList={[
            { id: '1', value: 'Get Milk' }]} />, container);
    });
    let liElement = container.querySelector('li');
    let doneButton = liElement.querySelector('button.done');
    let delteButton = liElement.querySelector('button.delete')

    expect(doneButton.textContent.toLowerCase()).toBe('done')
    expect(delteButton.textContent.toLowerCase()).toBe('delete')

})

test("Test for the list component to calling dette and done", function () {
    let setListItemDone = jest.fn();
    let setListItemDelete = jest.fn();

    act(() => {
        ReactDOM.render(<List toDoList={[
            { id: '1', value: 'Get Milk' }]}
            setListItemDone={setListItemDone}
            setListItemDelete={setListItemDelete}
        />, container);
    });
    let liElement = container.querySelector('li');
    let doneButton = liElement.querySelector('button.done');
    let delteButton = liElement.querySelector('button.delete')
    TestUtils.Simulate.click(doneButton)
    expect(setListItemDone).toHaveBeenCalled();
    expect(setListItemDone).toHaveBeenCalledWith('1');
    TestUtils.Simulate.click(delteButton)
    expect(setListItemDelete).toHaveBeenCalled();
    expect(setListItemDelete).toHaveBeenCalledWith('1');

})