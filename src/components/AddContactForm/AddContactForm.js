import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputHints from 'react-input-hints'

import './AddContactForm.css'

class AddContactForm extends Component {
  static propTypes = {
    addContactFunction: PropTypes.func
  }


  state = {
    contactName: '',
    contactNumber: '',
    error: null
  }



  handleSubmit = event => {
    event.preventDefault()
    if (this.state.contactName === '' || this.state.contactNumber === '') {
      this.setState({
        error: new Error('Please fill out all fields')
      })
      return;
    }
    this.props.addContactFunction(this.state.contactName, this.state.contactNumber)
    this.setState({ contactName: '', contactNumber: '', error: null })
  }

  handleChangeName = event => {
    this.setState({
      contactName: event.target.value
    })
  }

  handleChangeNumber = event => {
    this.setState({
      contactNumber: event.target.value
    })
  }

  render() {
    return (
      <div className="AddContactForm">
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error && <p>{this.state.error.message}</p>
          }
          <InputHints type="contactName" value={this.state.contactName} onChange={this.handleChangeName} placeholders={[
            'Enter name here...'
          ]} />
          <input type="contactNumber" value={this.state.contactNumber} onChange={this.handleChangeNumber} placeholder='Enter number here...' />
          <button>Add Contact</button>
        </form>
      </div>
    )
  }
}

export default AddContactForm