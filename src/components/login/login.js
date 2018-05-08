import React from 'react';
import './login.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
import { Link } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return(
        <div>
          <div className="login-form">
            <Form>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                    <Checkbox>下次自动登录</Checkbox>
                )}
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
              </FormItem>
            </Form>
            <div className="login-forgetRegister">
              <div className="login-pr10">忘记密码</div>
              <Link to="/register">注册新账号</Link>
            </div>
          </div>
        </div>
    )
  }
}

const WrappedLoginForm = Form.create()(Login);

export default WrappedLoginForm;