import React, { Component } from 'react'
import intl from 'react-intl-universal';
export default class Login extends Component {

  render() {
    return (
      <div>
        <span>{intl.get('Login')}</span>
      </div>
    )
  }
}
