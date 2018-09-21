import React, { PureComponent } from "react";
import './Hobbyists.css';

export class Hobbyists extends PureComponent {
  render() {
    const list = [0, 1, 2, 3];
    return (
      <div>
        <h3 className="page-title">All hobbyists</h3>
        <div className="page-container">
          <div className="list">
            {list.map((x, i) => (
              <HobbyistItem key={i} project={x} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

class HobbyistItem extends PureComponent {
  render() {
    return <div className="hobbyist-item">ListItem {this.props.project}</div>;
  }
}
