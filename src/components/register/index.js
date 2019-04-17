import React, { Component } from 'react'
import intl from 'react-intl-universal';

export default class Register extends Component {
  render() {
    return (
      <div>
        <span>{intl.get('Register')}</span>
      </div>
    )
  }
}
