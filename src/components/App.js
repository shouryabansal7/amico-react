import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Navbar, Home, Page404, Login, Signup, Settings } from './';
import { authenticateUser } from '../actions/auth';
import jwtDecode from 'jwt-decode';
import { getAuthTokenFromLocalStorage } from '../helper/utils';

const PrivateRoute = (privateRouteProps) => {
  const { isLoggedIn, component: Component, path } = privateRouteProps;

  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = getAuthTokenFromLocalStorage();

    if (token) {
      const user = jwtDecode(token);

      console.log('user', user);
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name,
        })
      );
    }
  }

  render() {
    const { posts, auth } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute
              path="/setting"
              component={Settings}
              isLoggedIn={auth.isLoggedIn}
            />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(App);
