import React, { Component } from "react";
import { Link } from 'react-router-dom';
class Nav extends Component {
  onchange = (e) => {
    var a = e.target.value;
    this.props.parentSetState({
      headone:a
    })
  }
  change = (e) => {
    var a = e.target.value;
    this.props.parentSetState({
      paraone:a
    })
  }
  render() {
    return (
      <div>
          <form>
            <input type="text" placeholder="Enter Heading" onChange={this.onchange} />
            <input type="text" placeholder="Enter Paragraph" onChange={this.change} />
          </form>
      </div>
    );
  }
}

export default Nav;
export const variable = 'string'
export const name = 'shuja'

