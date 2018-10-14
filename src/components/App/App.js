import React, { Component } from 'react';
import './App.css';



class App extends Component {

  state = {
    contacts: [
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
  }

  removeContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contactId !== contact.id
      )
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contact List</h1>
        </header>
        <main className="App-main">
          <ul>
            {
              this.state.contacts.map(
                contact => (
                  <li key={contact.id}>
                    {contact.name}<button onClick={() => this.removeContact(contact.id)}>Remove</button>
                  </li>
                )
              )
            }
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
