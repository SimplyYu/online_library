import React from 'react';
import './borrowBook.css';
import WrappedShareBookInfoForm from '../shareBookInfoForm/shareBookInfoForm';

class BorrowBook extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div className="shareBook-tabContainer">
          <WrappedShareBookInfoForm type="borrow"/>
        </div>
    )
  }
}

export default BorrowBook;
