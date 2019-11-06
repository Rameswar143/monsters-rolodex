import React, { Component } from 'react';
import './App.css';
import { CardList } from './Components/card-list/card-list.component';
import { Search } from './Components/search/search.component';
class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   string : "Hi Ramu"
    // 
    this.state = {
      // Hard coding Data
      //   monsters :[
      //   {name:"Frankstein",id:"asc1"},
      //   {name:"Dracula",id:"asc2"},
      //   {name:"Zombie",id:"asc3"}
      // ]
      // fetching data and setting dynamically
      monsters: [],
      searchField: ''
    }

  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json()
        .then(users => this.setState({ monsters: users })));
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>

        <Search placeholder="search monster" 
        handleChange={e => this.setState({ searchField: e.target.value })} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  };
}

export default App;
