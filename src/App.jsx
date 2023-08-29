import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "Стул серый",
          img: "chair-gray.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, temporibus!",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стол",
          img: "table.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, temporibus!",
          category: "tables",
          price: "149.99",
        },
        {
          id: 3,
          title: "Диван черный",
          img: "sofa-black.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, temporibus!",
          category: "sofas",
          price: "249.99",
        },
        {
          id: 4,
          title: "Стул черный",
          img: "chair-black.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, temporibus!",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 5,
          title: "Стол круглый",
          img: "table-round.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, temporibus!",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 6,
          title: "Диван красный",
          img: "sofa-red.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, temporibus!",
          category: "sofas",
          price: "249.99",
        },
      ],
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items}/>
        <Footer />
      </div>
    );
  }
}

export default App;
