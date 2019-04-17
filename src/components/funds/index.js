import React, { Component } from 'react'
import { Icon } from 'antd';
import { Link, withRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import AccountBalance from './accountBalance';
import Deposit from './deposit';
import Withdraw from './withdraw';
import Records from './records';
import addressManage from './addressManage';


export default class Funds extends Component {
  render() {
    return (
      <div className='content-main'>
        <div className='funds-menu'>
          <h3>
            <Icon type="user" />
            <span>资金管理</span>
          </h3>
          <ul>
            <li>
              <NavLink
                to='/funds/account'
                activeClassName="selected"
              >
                <span>账户余额</span>
                <Icon type="arrow-right" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/funds/deposit'
                activeClassName="selected"
              >
                <span>充币</span>
                <Icon type="arrow-right" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/funds/withdraw'
                activeClassName="selected"
              >
                <span>提币</span>
                <Icon type="arrow-right" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/funds/records'
                activeClassName="selected"
              >
                <span>资金记录</span>
                <Icon type="arrow-right" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/funds/address-manage'
                activeClassName="selected"
              >
                <span>地址管理</span>
                <Icon type="arrow-right" />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='funds-content'>
          <Switch>
            <Route path="/funds/account" component={AccountBalance} />
            <Route path="/funds/deposit" component={Deposit} />
            <Route path="/funds/withdraw" component={Withdraw} />
            <Route path="/funds/records" component={Records} />
            <Route path="/funds/address-manage" component={addressManage} />
            {/* <Route path="/app/funds" component={AccountBalance} /> */}
            <Route path="/funds" render={() => <Redirect to="/funds/account" />} />
          </Switch>
        </div>
      </div >
    )
  }
}
