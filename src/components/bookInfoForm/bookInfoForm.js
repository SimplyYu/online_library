import React from 'react';
import PropTypes from 'prop-types';

import { Form, Input, Button, Upload, message, Icon, Select } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 9 },
};

const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

const props = {
  name: 'file',
  action: '',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class BookInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookType: 'p-book',
    }
  }

  getBookInfoForm = (type) => {
    const { getFieldDecorator } = this.props.form;
    const shareBookInfoForm = (
        <div>
          <FormItem {...formItemLayout} label="书名">
            {getFieldDecorator('bookName', {
              rules: [{
                required: true,
                message: '',
              }],
            })(
                <Input placeholder="请填写书名" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="作者">
            {getFieldDecorator('author', {
              rules: [{
                required: true,
                message: '',
              }],
            })(
                <Input placeholder="请填写书的作者" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="出版社">
            {getFieldDecorator('publisher', {
              rules: [{
                required: false,
                message: '',
              }],
            })(
                <Input placeholder="请填写书的出版社" />
            )}
          </FormItem>
          {this.props.eBook ? <FormItem {...formItemLayout} label="上传电子书籍">
            {getFieldDecorator('uploadEBook', {
              rules: [{
                required: true,
                message: '',
              }],
            })(
                <Upload {...props}>
                  <Button>
                    <Icon type="upload" /> Click to Upload
                  </Button>
                </Upload>
            )}
          </FormItem> : null}
          <FormItem {...formItemLayout} label="我的分享语">
            {getFieldDecorator('shareWords', {
              rules: [{
                required: false,
                message: '',
              }],
            })(
                <TextArea rows={4}/>
            )}
          </FormItem>
          <FormItem {...formTailLayout}>
            <Button type="primary" onClick={this.check}>
              确认分享
            </Button>
          </FormItem>
        </div>
    );
    const borrowBookInfoForm = (
        <div>
          <FormItem {...formItemLayout} label="书名">
            {getFieldDecorator('bookName', {
              rules: [{
                required: true,
                message: '',
              }],
            })(
                <Input placeholder="请填写书名" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="作者">
            {getFieldDecorator('author', {
              rules: [{
                required: true,
                message: '',
              }],
            })(
                <Input placeholder="请填写书的作者" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="你的所在地">
            {getFieldDecorator('location', {
              rules: [{
                required: true,
                message: '',
              }],
            })(
                <Input placeholder="请填写你的所在地" />
            )}
          </FormItem>
          <FormItem {...formTailLayout}>
            <Button type="primary" onClick={this.check}>
              确认借阅
            </Button>
          </FormItem>
        </div>
    )

    const bookInfoForm = {
      share: shareBookInfoForm,
      borrow: borrowBookInfoForm,
    }
    return bookInfoForm[type];
  };

  render() {
    return(
      <div>
        {this.getBookInfoForm(this.props.type)}
      </div>
    )
  }
}

const WrappedBookInfoForm = Form.create()(BookInfoForm);

BookInfoForm.PropTypes = {
  eBook: PropTypes.bool,
  type: PropTypes.string
};

export default WrappedBookInfoForm;