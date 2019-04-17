import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { LocaleProvider, Layout, Menu, Icon, Select, Pagination } from 'antd';
import Test from '../test'
import Top from './header'
import Buttom from './footer'

import Intluniversal from '../intl-universal'
import HomeContent from './content'
import Funds from '../funds'
import Exchange from '../exchange'

const { Footer, Sider, Content, Header } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='home'>
        <Layout>
          <Header>
            <Top />
          </Header>
          <Content>
            <Switch>
              <Route path="/funds" component={Funds} />
              {/* <Route path="/app/exchange" component={Exchange} /> */}
              <Route path="/" component={HomeContent} />
            </Switch>
            {/* <Test /> */}
            {/* <Intluniversal /> */}
            {/* <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} /> */}
          </Content>
          <Footer>
            <Buttom />
          </Footer>
        </Layout>
      </div>
    )
  }
}
export default Home;