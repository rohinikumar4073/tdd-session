export default {
    deleteToDo (id, list) {
        let index = this.findIndexOf(id, list);
        list.splice(index, 1);
    },
    setItemDone (id, list) {
        let index = this.findIndexOf(id, list);
        list[index].done = true;

    },
    addToDo (newItem, list) {
        let id = this.generateId();
        list.push({ id, value: newItem })
    },
    generateId () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },
    findIndexOf (id, list) {
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if (element.id === id) {
                return index;
            }
        }
        return -1;
    }
}
