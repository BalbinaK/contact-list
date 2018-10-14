import React, { Component } from 'react';
import './App.css';


const contacts = [
  {
    id: 1,
    name: 'Barry',
    surname: 'Fletcher',
    number: '43243443'
  },
  {
    id: 2,
    name: 'Harry',
    surname: 'Smith',
    number: '76555543'
  },
  {
    id: 3,
    name: 'Marry',
    surname: 'Butcher',
    number: '97653234'
  }
]
class App extends Component {
  
  state = {
    contacts: []
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contact List</h1>
        </header>
      </div>
    );
  }
}

export default App;
