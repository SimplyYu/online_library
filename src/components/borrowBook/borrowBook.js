import React from 'react';
import './borrowBook.css';
import WrappedBookInfoForm from '../bookInfoForm/bookInfoForm';

class BorrowBook extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div className="shareBook-tabContainer">
          <WrappedBookInfoForm type="borrow"/>
        </div>
    )
  }
}

export default BorrowBook;
