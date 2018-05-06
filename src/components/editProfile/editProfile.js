import React from 'react';
import './editProfile.css';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="editProfile-container">
        <div className="editProfile-title">个人资料</div>
        <div className="editProfile-proInfoContainer">
          <div>头像</div>
          <div>用户名：小鱼</div>
          <div>性别: 女</div>
          <div>所在地：南京</div>
          <div>个人介绍：。。。。。。</div>
        </div>
      </div>
    )
  }
}

export default EditProfile;