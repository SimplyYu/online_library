/**
 * 
 * @authors luozh@snail.com
 * @date    2016-03-21 16:42:35
 * @description 主入口模块
 */

import React from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入主体样式文件
import './main.css'

// 引入单个页面（包括嵌套的子页面）
import Home from './components/home/home';
import IndividualCenter from './components/individualCenter/individualCenter';
import ShareBooks from './components/shareBooks/shareBooks';
import EditProfile from './components/editProfile/editProfile';
import BorrowBook from './components/borrowBook/borrowBook';
import WrappedLoginForm from './components/login/login';
import WrappedRegistrationForm from './components/register/register';

// 配置导航
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const isLogin = false;
    return (
      <div>
        <div className="headerContainer">
          <div className="main-header">
            <div>
              <Link to="/" className="mr40">首页</Link>
              <Link to="/shareBooks">分享书籍</Link>
              <Link to="/borrowBook" className="ml40">借阅书籍</Link>
            </div>
            <div>
              <Link to="" className="mr40">消息</Link>
              {isLogin ? <Link to="/individualCenter">个人中心</Link> :
                  <Link to="/login">登录</Link>}
            </div>
          </div>
        </div>
        <div className="bodyContainer">
            { this.props.children }
        </div>
      </div>
    )
  }
}


// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={Header}>
            <IndexRoute path="home" component={Home} />
            <Route path="individualCenter" component={IndividualCenter} />
            <Route path="shareBooks" component={ShareBooks} />
            <Route path="editProfile" component={EditProfile} />
            <Route path="borrowBook" component={BorrowBook} />
            <Route path="login" component={WrappedLoginForm} />
            <Route path="register" component={WrappedRegistrationForm} />
        </Route>
    </Router>
), document.getElementById('app'));


