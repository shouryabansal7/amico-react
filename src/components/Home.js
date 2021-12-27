import React from 'react';
import { PostsList, FriendsList } from './';

class Home extends React.Component {
  render() {
    const { posts, friends, isLoggedIn } = this.props;
    console.log('Props', this.props);
    return (
      <div className="home">
        <PostsList posts={posts} />
        {isLoggedIn && <FriendsList friends={friends} />}
      </div>
    );
  }
}

export default Home;
