import React from 'react';
import { PostsList, FriendsList, Chat } from './';

class Home extends React.Component {
  render() {
    const { posts, friends, isLoggedIn } = this.props;
    console.log('Props', this.props);
    return (
      <div className="home">
        <PostsList posts={posts} />
        {isLoggedIn && <FriendsList friends={friends} />}
        {isLoggedIn && <Chat />}
      </div>
    );
  }
}

export default Home;
