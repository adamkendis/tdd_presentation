import React from 'react';
import { AddItem, ItemList } from './components';
import db from '../database';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };

    this.updateList       = this.updateList.bind(this);
    this.handleAddItem    = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  componentDidMount() {
    this.updateList();
  }

  updateList() {
    const list = db.getList();
    this.setState({ list });
  }

  handleAddItem(item) {
    db.add(item);
    this.updateList();
  }

  handleDeleteItem(id) {
    db.remove(id);
    this.updateList();
  }

  render() {
    const { list } = this.state;

    return (
      <div id="app-container">
        <h1>Grocery List</h1>
        <AddItem
          handleAddItem={this.handleAddItem}
        />
        <ItemList
          list={list}
          handleDeleteItem={this.handleDeleteItem}
        />
      </div>
    )
  }
}

export default App;
