import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './AddContactForm.css'

class AddContactForm extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className="AddContactForm">
        <form>
          <input/>
          <input />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default AddContactForm