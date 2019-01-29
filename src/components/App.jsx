import React, { Component } from "react";


class App extends Component {

  state = {
    users: [],
    filtered:[]
  }
  filterThis = (e) => {
    this.setState({
      filtered: this.state.users.filter((val) => {
        if (val.name.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1 ) { 
          return true
        }
      })
    })
  }
  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => { return res.json() })
      .then(res => this.setState({ users: res }))
  }
  render() {
    var usershtml = this.state.users.map((v, i) => {
      return (
        <li key={i}>
          <h1>
            {v.name}
          </h1>
        </li>
      )
    })
    var filteredusers = this.state.filtered.map((v, i) => {
      return (
        <li key={i}>
          <h1>
            {v.name}
          </h1>
        </li>
      )
    })
    return (
      <div>
        <ul style={{width:"45%",float:"left",textAlign:"center"}}>
          {usershtml}
        </ul>
        <div style={{width:"45%",float:"left",textAlign:"center"}}>
          <h1>Search</h1>
          <input onChange={this.filterThis} type="text" style={{ outline:"none",width: "100%",height:"50px",border:"none",borderBottom:"1px solid black" }}/>
          <ul>
            {filteredusers}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
