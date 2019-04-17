import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('authenticated')
@observer
class PrivateRoute extends Component {
  render() {
    const { component: Component, ...rest } = this.props;
    const { isAuthenticated } = this.props.authenticated;
    return (
      <div>
        <Route
          {...rest}
          render={props =>
            isAuthenticated ? (
              <Component {...props} />
            ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: props.location }
                  }}
                />
              )
          }
        />
      </div>
    )
  }
}
export default PrivateRoute