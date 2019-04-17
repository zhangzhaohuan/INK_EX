import React, { Component } from 'react'
import { Table, Icon, Divider, Pagination, Checkbox, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
const Search = Input.Search;
const Option = Select.Option;
const columns = [{
  title: '币种',
  dataIndex: 'coinName',
  key: 'coinName',
}, {
  title: '可用',
  dataIndex: 'normal_balance',
  key: 'normal_balance',
}, {
  title: '冻结',
  dataIndex: 'lock_balance',
  key: 'lock_balance',
}, {
  title: 'BTC估值',
  dataIndex: 'btcValuatin',
  key: 'btcValuatin',
},
{
  title: '操作',
  key: 'action',
  render: () => (
    <span>
      <Link to='/funds/deposit'>充值</Link>
      <Divider type="vertical" />
      <Link to='/funds/withdraw'>提现</Link>
      <Divider type="vertical" />
      <Link to='/exchange'>交易</Link>
    </span>
  ),
}];

const data = [{
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC",
  "lock_balance": "0.00000000",

}, {
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC2",
  "lock_balance": "0.00000000",

}, {
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC21",
  "lock_balance": "0.00000000",
}, {
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC4",
  "lock_balance": "0.00000000",
}
  , {
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC5",
  "lock_balance": "0.00000000",
}
  , {
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC6",
  "lock_balance": "0.00000000",
}
  , {
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC7",
  "lock_balance": "0.00000000",
}
  , {
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC8",
  "lock_balance": "0.00000000",
}
  , {
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC9",
  "lock_balance": "0.00000000",
}
  , {
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC10",
  "lock_balance": "0.00000000",
}
  , {
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC11",
  "lock_balance": "0.00000000",
}
  , {
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC12",
  "lock_balance": "0.00000000",
}
  , {
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC13",
  "lock_balance": "0.00000000",
}
  , {
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC14",
  "lock_balance": "0.00000000",
}
  , {
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC15",
  "lock_balance": "0.00000000",
}
  , {
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC16",
  "lock_balance": "0.00000000",
}
  , {
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC17",
  "lock_balance": "0.00000000",
}
  , {
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC18",
  "lock_balance": "0.00000000",
}
  , {
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC19",
  "lock_balance": "0.00000000",
}
  , {
  "total_balance": "0.00000000",
  "normal_balance": "0.00000000",
  "present_coin_balance": "0.00000000",
  "btcValuatin": "0.00000000",
  "coinName": "BTC20",
  "lock_balance": "0.00000000",
}
];

export default class AccountBalance extends Component {
  constructor() {
    super();
    this.coin = 'CNY';
  }
  
  //checkbox切换
  onChange = (e) => {
    console.log(e.target.checked);
  }
  
  //搜索
  onSearch = (value) => {
    console.log(value);
  }

  //页码改变
  onPageChange=(page,pageSize)=>{
    console.log(page,pageSize);
  }
  render() {
    return (
      <div className='account-balance'>
        <div className='title'>
          <h3>币币账户</h3>
          <Select
            defaultValue={this.coin}
            size='small'
            style={{ width: 88, border: 0 }}
            onChange={this.changeLanguage}>
            <Option value="zh-CN">CNY</Option>
            <Option value="en-US">USD</Option>
          </Select>
        </div>
        <div className='query'>
          <span>总资产折合:{0.00002}BTC≈¥{8000}</span>
          <div className='right'>
            <Checkbox onChange={this.onChange}>隐藏零余额</Checkbox>
            <Search
              placeholder="Search for currency"
              onSearch={this.onSearch}
              style={{ width: 200 }}
            />

          </div>
        </div>
        <Table
          rowKey="coinName"
          columns={columns}
          dataSource={data}
          pagination={{ position: 'none', pageSize: 15 }} />
        <Pagination defaultCurrent={1} total={50} onChange={this.onPageChange} />
      </div>
    )
  }
}
