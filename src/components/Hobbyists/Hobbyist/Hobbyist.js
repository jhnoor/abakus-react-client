import React, { PureComponent } from 'react'

export class Hobbyist extends PureComponent {

  render() {
    console.log(this.props);
    return (
      <div> 
        Hobbyist with id {this.props.match.params.id}
      </div>
    )
  }
}
