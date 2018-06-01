import React, { Component } from 'react'
import { LocaleProvider, Layout, Select,Button } from 'antd';
import intl from 'react-intl-universal';
import { Link } from 'react-router-dom';

import { observer, inject } from 'mobx-react'
import { setCookie, getCookie } from 'common/cookie.js'

const Option = Select.Option;
const { Header } = Layout;

@observer
export default class Top extends Component {
  constructor(props) {
    super(props);
    this.defaultLan = ''
  }
  changeLanguage = (e) => {
    setCookie('lang', e);
    window.location.reload();
  }
  componentWillMount() {
    if (!getCookie('lang')) {
      let lang = window.navigator.language;
      if (lang == 'zh') lang = 'zh-CN';
      setCookie("lang", lang);
    }
    this.defaultLan = getCookie('lang');
  }

  login = () => {
    const { history } = this.props;
    history.push('/login');
  }
  register = () => {
    const { history } = this.props;
    history.push('/register');
  }
  render() {
    return (
      <Header>
        <div className='logo'>logo</div>
        <div className='nav'>
          {/* <Menu
            onClick={this.handleClick}
            mode="horizontal"
          >
            <Menu.Item key="home">
              <Link to="/app">Home</Link>
            </Menu.Item>
            <Menu.Item key="otc">
              <Link to="/app/funds">Funds</Link>
            </Menu.Item>
            <Menu.Item key="exchange">
              <Link to="/app/exchange">Exchange</Link>
            </Menu.Item>
            <Menu.Item key="notice">
              <Link to="/">Notice</Link>
            </Menu.Item>
          </Menu> */}
          <ul>
            <li><Link to="/app">Home</Link></li>
            <li><Link to="/app/funds">Funds</Link></li>
            <li><Link to="/app/exchange">Exchange</Link></li>
            <li><Link to="/">Notice</Link></li>
          </ul>
          {/* <span className='nav-item'><Link to="/app">Home</Link></span>
          <span className='nav-item'><Link to="/app/funds">Funds</Link></span>
          <span className='nav-item'><Link to="/app/exchange">Exchange</Link></span>
          <span className='nav-item'><Link to="/">Notice</Link></span> */}
        </div>
        <div className='support'>
          {/* <Select defaultValue={this.defaultLan} style={{ width: 120 }} onChange={this.changeLanguage}>
            <Option value="zh-CN">中文</Option>
            <Option value="en-US">english</Option>
          </Select> */}
        </div>
        <div className='right'>
          <Select defaultValue={this.defaultLan} style={{ width: 120 }} onChange={this.changeLanguage}>
            <Option value="zh-CN">中文</Option>
            <Option value="en-US">english</Option>
          </Select>
          <Button className='but_primary but_login' ghost onClick={this.login} >{intl.get('login')}</Button>
          <Button className='but_primary but_sign' onClick={this.register} >{intl.get('register')}</Button>
        </div>


      </Header>
    )
  }
}
