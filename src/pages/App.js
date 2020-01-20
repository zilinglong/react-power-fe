// import React from 'react';
// import { Button } from 'antd';
// import './App.scss';

// function App() {
//   return (
//     <div className="app wrap padding20">
//       <p className="title">这里是题目显示区域</p>
//       <p className="content">这里是内容显示区域</p>
//       <Button type="primary">Button</Button>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import { Button } from 'antd';
import Layout from './layout/layout';
import axios from 'axios';
import './App.scss';

class App extends Component {
  componentDidMount() {
    this.serverRequest = axios.get('https://api.github.com/users/octocat/gists').then(res => {
      let result = res.data[0];
      console.log('axios result:', result);
      // this.setState({
      //   userName: result.owner.login,
      //   lastGistUrl: result.url
      // });
    });
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  render() {
    return (
    <div className="app wrap">
      {/* <p className="title">这里是题目显示区域</p>
      <p className="content">这里是内容显示区域</p>
      <Button type="primary">Button</Button> */}
      <Layout></Layout>
    </div>
    );
  }
}

export default App;
