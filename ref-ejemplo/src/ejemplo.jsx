import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.handleRef = this.handleRef.bind(this);
  }

  myDomNode = null;

  handleRef(ref) {
    this.myDomNode = ref;
    this.myDomNode.onclick = () => {
      alert("Hello");
    };
  }

  componentDidMount() {
    console.log(this.myDomNode);
  }

  addEvent() {}

  render() {
    return (
      <input type="password" ref={this.handleRef} onClick={this.addEvent} />
    );
  }
}

export default MyComponent;
