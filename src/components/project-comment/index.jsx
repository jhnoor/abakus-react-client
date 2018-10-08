import React, { Component } from "react";

export default class componentName extends Component {
  render() {
    const { text } = this.props;
    return (
      <div>
        <span>{text}</span>
      </div>
    );
  }
}
