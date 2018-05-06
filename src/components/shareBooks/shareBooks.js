import React from 'react';
import './shareBooks.css';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import WrappedShareBookInfoForm from '../shareBookInfoForm/shareBookInfoForm';

class ShareBooks extends React.Component {
  constructor(props) {
    super(props);
  }

  tabsOnChange = (key) => {
    console.log('----->', key);
  };

  render() {
    return(
      <div className="shareBook-tabContainer">
        <Tabs onChange={this.tabsOnChange} type="card">
          <TabPane tab="纸质书籍" key="1">
            <WrappedShareBookInfoForm type="share"/>
          </TabPane>
          <TabPane tab="电子书籍" key="2">
            <WrappedShareBookInfoForm type="share" eBook={true} />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default ShareBooks;