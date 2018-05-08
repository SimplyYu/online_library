import React from 'react';
import './register.css';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
    }
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('密码不一致!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 5,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
    );

    return (
        <div className="register-formContainer">
          <Form>
            <FormItem
                {...formItemLayout}
                label={(
                    <span>
              昵称&nbsp;
                      <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                )}
            >
              {getFieldDecorator('nickname', {
                rules: [{ required: true, message: '请输入呢称!', whitespace: true }],
              })(
                  <Input />
              )}
            </FormItem>
            <FormItem
                {...formItemLayout}
                label="密码"
            >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: '请输入密码!',
                }, {
                  validator: this.validateToNextPassword,
                }],
              })(
                  <Input type="password" />
              )}
            </FormItem>
            <FormItem
                {...formItemLayout}
                label="确认密码"
            >
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: '请确认密码!',
                }, {
                  validator: this.compareToFirstPassword,
                }],
              })(
                  <Input type="password" onBlur={this.handleConfirmBlur} />
              )}
            </FormItem>
            <FormItem
                {...formItemLayout}
                label="所在地"
            >
              {getFieldDecorator('residence', {
                initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                rules: [{ type: 'array', required: true, message: '请输入所在地!' }],
              })(
                  <Cascader options={residences} />
              )}
            </FormItem>
            <FormItem
                {...formItemLayout}
                label="手机号码"
            >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: '请输入手机号码!' }],
              })(
                  <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
              )}
            </FormItem>
            <FormItem
                {...formItemLayout}
                label="验证码"
            >
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('captcha', {
                    rules: [{ required: true, message: '请输入收到的验证码!' }],
                  })(
                      <Input />
                  )}
                </Col>
                <Col span={12}>
                  <Button>获取验证码</Button>
                </Col>
              </Row>
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              {getFieldDecorator('agreement', {
                valuePropName: 'checked',
              })(
                  <Checkbox>I have read the <a href="">agreement</a></Checkbox>
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" className="registerBtn">注册</Button>
            </FormItem>
          </Form>
        </div>
    )
  }
}

const WrappedRegistrationForm = Form.create()(Registration);

export default WrappedRegistrationForm;