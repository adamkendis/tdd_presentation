const db = require('../database');

// Mock Item
let item;

// Before each test reset Database ID and List
  beforeEach(() => {
    db.id = 1;
    db.list = [{ id: 0, name: 'banana', color: 'yellow' }];
    item = {
      name: 'grapes',
      color: 'purple',
      price: 2,
    };
  });

describe('Get List', () => {
  it('Should return a list of items as an array', () => {
    const list = db.getList();
    expect(Array.isArray(list)).toBe(true);
  });

  it('Should contain a list of items with name, color, and id properties', () => {
    const list = db.getList();
    list.forEach(item => {
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('color');
      expect(item).toHaveProperty('id');
      expect(item).not.toHaveProperty('test');
    })
  });
});

describe('Get Item', () => {
  it('Should return an item when passed the name of item', () => {
    const item = db.getItem('banana');
    expect(item).toBeDefined();
    expect(item).not.toBeNull();
  });

  it('Should return the EXACT item of the name passed in', () => {
    const item = db.getItem('banana');
    expect(item.name).toBe('banana');
  });
})

describe('Adding Items', () => {
  it('Should add an item object to the database', () => {
    expect(db.getList().length).toBe(1);
    db.add(item);
    expect(db.getList().length).toBe(2);
  });

  it('Should add the correct item to the database', () => {
    db.add(item);
    const grape = db.getItem('grapes');
    expect(grape.name).toBe('grapes');
  });

  it('Should add an ID property to the item with latest ID', () => {
    expect(item).not.toHaveProperty('id');
    db.add(item);
    const grape = db.getItem('grapes');
    expect(grape).toHaveProperty('id');
  });

  it('Should increase the database id count by 1', () => {
    expect(db.id).toBe(1);
    db.add(item);
    expect(db.id).toBe(2);
  });

  // Specs:
  // -- Add ID property with the latest ID to the item
  // -- Increase the database ID count after you add a new item
});

describe('Remove Item', () => {
  it('Should have a reduced length by 1 after deleting', () => {
    expect(db.getList().length).toBe(1);
    db.remove(0);
    expect(db.getList().length).toBe(0);
  });

  it('Should remove the correct item', () => {
    expect(db.remove(0).id).toBe(0);
  })
})