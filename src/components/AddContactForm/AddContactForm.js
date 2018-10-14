import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './AddContactForm.css'

class AddContactForm extends Component {
  static propTypes = {

  }

  handleSubmit = event => {
    event.preventDefault()
  }



  render() {
    return (
      <div className="AddContactForm">
        <form onSubmit={this.handleSubmit}>
          <input />
          <input />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default AddContactForm