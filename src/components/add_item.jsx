import React from 'react';

class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      name: '',
      color: '',
      price: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onAdd    = this.onAdd.bind(this);
  }

  onChange(e) {
    const { value, id } = e.target;
    this.setState({
      [id]: value
    })
  }

  onAdd() {
    const { handleAddItem } = this.props;
    handleAddItem(this.state);
    this.setState({
      id: null,
      name: '',
      color: '',
      price: ''
    });
  }

  render() {
    const { name, color, price } = this.state;

    return (
      <div id="add-item-container">
        Name:  <input id="name"  value={name}  onChange={this.onChange}></input>
        Color: <input id="color" value={color} onChange={this.onChange}></input>
        Price: <input id="price" value={price} onChange={this.onChange}></input>
        <p/>
        <button value="add" onClick={this.onAdd}>Add Item</button>
      </div>
    )
  }
}

export default AddItem;

