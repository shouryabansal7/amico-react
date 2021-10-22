import React, { Component } from 'react';
import { PostsList } from './';

class Home extends React.Component {
  render() {
    const { posts } = this.props;
    console.log('Props', this.props);
    return (
      <div>
        <PostsList posts={posts} />
      </div>
    );
  }
}

export default Home;
