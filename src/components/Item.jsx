import React, { Component } from "react";

export class Item extends Component {

  render() {
    return (
      <div className="item">
        <div className="item-img" style={{ height: this.props.itemWidth + "px" }}>
          <img
            src={"./img/" + this.props.item.img}
            alt={this.props.item.title}
          />
        </div>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}$</b>
        <div className="add-to-cart">+</div>
      </div>
    );
  }
}

export default Item;
