import Utilities from './Utilities';
let list = [];
test('Test add new Item', function () {
    let mockFunc = jest.fn();
    mockFunc.mockReturnValueOnce(1);
    Utilities.generateId = mockFunc;
    let list = [];
    Utilities.addToDo('Play Football', list);
    expect(list.length).toBe(1);
    expect(list[0]).toStrictEqual({ id: 1, value: 'Play Football' })
});


test.each([
    ['1', [{ id: "0" }, { id: "1" }], 1],
    ['0', [{ id: "0" }, { id: "1" }], 0],
    ['10', [{ id: "0" }, { id: "1" }], -1]
])('Find index of the elemnt', function (id, list, expected) {
    let index = Utilities.findIndexOf(id, list);
    expect(index).toBe(expected);
})
test('Test delete an Item', function () {

    let list = [{ id: "1", value: 'hi' },{ id: "10", value: 'hi' }];
    Utilities.deleteToDo('10', list);
    let elem = list.find((item) => item.id === "10")
    expect(elem).toBeUndefined();

});
test('Test set item done', function () {

    let list = [{ id: "1", value: 'hi' }];
    Utilities.setItemDone('1', list);
    let elem = list.find((item) => item.id === "1")
    expect(elem.done).toBe(true);

});