import React, { Component } from "react";
import Item from "./Item";

export class Items extends Component {
  state = { itemWidth: 0 };

  componentDidMount() {
    const itemCurrentWidth = document.querySelector(".item").offsetWidth;
    this.setState({ itemWidth: itemCurrentWidth });
  }

  render() {
    const { itemWidth } = this.state;

    return (
      <main>
        {this.props.items.map((el) => (
          <Item key={el.id} item={el} itemWidth={itemWidth} />
        ))} 
      </main>
    );
  }
}

export default Items;
