import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { LocaleProvider, Layout, Menu, Icon, Select, Pagination } from 'antd';
import { observer, inject } from 'mobx-react'
import Test from '../test'
import Top from './header'
import Intluniversal from '../intl-universal'
import HomeContent from './content'
import Funds from '../funds'
import Exchange from '../exchange'

const { Footer, Sider, Content, Header } = Layout;
@observer
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.path = this.props.match.path;
  }
  render() {
    console.log(this.path);
    
    return (
      <div className='home'>
        <Layout>
          <Header>
            <Top history={this.props.history} />
          </Header>
          <Content>
              <Switch>
                <Route path="/app/funds" component={Funds} />
                <Route path="/app/exchange" component={Exchange} />
                <Route path="/app" component={HomeContent} />
              </Switch>
            {/* <Test /> */}
            {/* <Intluniversal /> */}
            {/* <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} /> */}
          </Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
    )
  }
}
