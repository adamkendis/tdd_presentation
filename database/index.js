module.exports = {
  id: 0,
  list: [],

  getList() {
    return this.list;
  },

  add(item) {
    item.id = this.id;
    this.list.push(item);
    this.id += 1;
  },

  getItem(name) {
    let result = null;
    this.list.forEach(item => {
      if (item.name === name) {
        result = item;
      }
    })
    return result;
  },

  remove(id) {
    let result = null;
    this.list.forEach((item, index) => {
      if (item.id === id) {
        result = item;
        this.list.splice(index, 1);
      }
    })
    return result;
  },
}