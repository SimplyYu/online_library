import React from 'react';
import './home.css';
import { Input } from 'antd'
const Search = Input.Search;



class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="homeContainer">
        <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: '40%' }}
        />
        <div className="tags">
          <div>热门书评</div>
          <div>附近书籍</div>
        </div>
      </div>
    )
  }
}

export default Home;