import React, { Component } from 'react';
import AddContactForm from '../AddContactForm'

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
    ],
    previousState: null
  }

  removeContact = contactId => {
    this.setState({
      previousState: this.state,
      contacts: this.state.contacts.filter(
        contact => contactId !== contact.id
      )
    })
  }

  handleUndo = () => {
    this.setState(this.state.previousState)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contact List</h1>
          <button onClick={this.handleUndo}>Undo</button>
        </header>
        <main className="App-main">
        <AddContactForm/>
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
