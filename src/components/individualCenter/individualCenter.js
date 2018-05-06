import React from 'react';
import './individualCenter.css';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import { Link } from 'react-router';

class IndividualCenter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="individual-container">
        <div className="individual-headerContainer">
          <div>小鱼的个人中心</div>
          <Link to="/editProfile">编辑个人资料</Link>
        </div>
        <div className="individual-tabContainer">
          <Tabs defaultActiveKey="1">
            <TabPane tab="我分享的书籍" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="我求借的书籍" key="2">Content of Tab Pane 2</TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default IndividualCenter;