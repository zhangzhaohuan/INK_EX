import React, { Component } from 'react'
import { LocaleProvider, Layout, Select, Button, Icon, Popover } from 'antd';
import intl from 'react-intl-universal';
import { Link, withRouter } from 'react-router-dom';

import { observer, inject } from 'mobx-react'
import { setCookie, getCookie } from 'common/cookie.js'
const Option = Select.Option;
const { Header } = Layout;
@inject('authenticated')
@observer
class Top extends Component {
  constructor(props) {
    super(props);
    this.defaultLan = '';
    this.state = {
      visible: true
    }
  }
  changeLanguage = (e) => {
    setCookie('lang', e);
    window.location.reload();
  }
  componentWillMount() {
    console.log(this.authenticated);

    if (!getCookie('lang')) {
      let lang = window.navigator.language;
      if (lang == 'zh') lang = 'zh-CN';
      setCookie("lang", lang);
    }
    this.defaultLan = getCookie('lang');
  }
  componentDidMount() {
    // console.log(new Error('123'));
    // throw new Error("提示文字");
  }
  logout = () => {
    this.props.authenticated.Authenticate();
    const { history } = this.props;
    history.push('/');
    // this.renderLoginStatus();
  }
  login = () => {
    const { history } = this.props;
    history.push('/login');
  }
  register = () => {
    const { history } = this.props;
    history.push('/register');
  }
  renderPersonal = () => {
    return (
      <div>
        <div className='personal-item'><Link to='./'><Icon type='user' /><span className='personal-item-span'>个人中心</span></Link></div>
        <div className='personal-item'><Link to='./'><Icon type='user' /><span className='personal-item-span'>安全设置</span></Link></div>
        <div className='personal-item'><Icon type='user' /><span className='personal-item-span'><Button onClick={this.logout}>退出登陆</Button></span></div>
      </div>
    )
  }
  renderLoginStatus = () => {
    //状态要存在cookie里
    const authenticated = this.props.authenticated.isAuthenticated;
    console.log(this.authenticated);
    
    if (authenticated) {
      return (
        <div className='is-login'>
          <span>
            <Icon type="user" />
            <Link to='/funds'>资金管理</Link>
          </span>
          <Select defaultValue={this.defaultLan}
            style={{ width: 88, border: 0 }}
            onChange={this.changeLanguage}>
            <Option value="zh-CN">中文</Option>
            <Option value="en-US">EN</Option>
          </Select>
          <Popover placement="bottom" content={this.renderPersonal()} trigger="click">
            <Icon type="user" />
          </Popover>
          {/* <span>
            <Link to='/app/user'><Icon type="user" /></Link>
          </span> */}
        </div>
      )
    } else {
      return (
        <div className='un-login'>
          <Select defaultValue={this.defaultLan}
            style={{ width: 88, border: 0 }}
            onChange={this.changeLanguage}>
            <Option value="zh-CN">中文</Option>
            <Option value="en-US">EN</Option>
          </Select>
          <Button className='but_primary but_login' ghost onClick={this.login} >{intl.get('Login')}</Button>
          <Button className='but_primary but_sign' onClick={this.register} >{intl.get('Register')}</Button>
        </div>
      )
    }
  }


  render() {
    return (
      <div className='top-main'>
        <div className='logo'>logo</div>
        <div className='nav'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/funds">Funds</Link></li>
            <li><Link to="/exchange">Exchange</Link></li>
            <li><Link to="/">Notice</Link></li>
          </ul>
        </div>
        <div className='support'>
          <Select value='support'
            style={{ width: 100, border: 0 }} dropdownMatchSelectWidth
          >
            <Option value="zh-CN1">
              <a className='sup-item' href="http://www.baidu.com">
                <Icon type="question-circle-o" />
                <span>{intl.get('Common_Problems')}</span>
              </a>
            </Option>
            <Option value="zh-CN2">
              <a className='sup-item' href="http://www.baidu.com">
                <Icon type="sound" />
                <span>{intl.get('Site_Notice')}</span>
              </a>
            </Option>
            <Option value="zh-CN3">
              <a className='sup-item' href="http://www.baidu.com">
                <Icon type="red-envelope" />
                <span>{intl.get('Rate_Description')}</span>
              </a>

            </Option>
            <Option value="zh-CN4">
              <a className='sup-item' href="http://www.baidu.com">
                <Icon type="form" />
                <span>{intl.get('Submit_Form')}</span>
              </a>

            </Option>
          </Select>
        </div>
        {
          this.renderLoginStatus()
        }

      </div>

    )
  }
}
export default withRouter(Top);