import React, { Component } from 'react';
import AddContactForm from '../AddContactForm'

import './App.css';



class App extends Component {

  state = {
    contacts: JSON.parse(localStorage.getItem('contacts') || '[]'),
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

  addContact = (name, number) => {
    this.setState({
      previousState: this.state,
      contacts: this.state.contacts.concat({
        id: Date.now(),
        name,
        number
      })
    })
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contact List</h1>
        </header>
        <main className="App-main">
          <AddContactForm addContactFunction={this.addContact} />
          <div className="App-contactList">
            <h2>My contact list</h2>
            <ol>
              {
                this.state.contacts.map(
                  contact => (
                    <div className="App-contactItem">
                      <li key={contact.id}>
                        {contact.name} tel. {contact.number}
                      </li>
                      <button onClick={() => this.removeContact(contact.id)}>Remove</button>
                    </div>

                  )
                )
              }
            </ol>
            <button onClick={this.handleUndo}>Undo</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
