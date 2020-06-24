import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Fadhlu', age: 24 },
      { name: 'Sasa', age: 22 },
    ],
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Fadhlurahman', age: 24 },
        { name: 'Syahfira', age: 19 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          Hobby: Makan kuaci
        </Person>
      </div>
    );
  }
}

export default App;
