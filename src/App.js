import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import NewsfeedPage from './pages/NewsfeedPage/NewsfeedPage'
import AboutPage from './pages/AboutPage/AboutPage'
import NavBar from './components/NavBar/NavBar'

import userService from './services/userService'
import postsService from './services/postsService'

class App extends Component {
  state = {
    user: null,
    posts: [],
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleUpdatePosts = posts => {
    this.setState({posts: posts})
  }

  handleSignuporLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  async componentDidMount() {
    const user = userService.getUser();
    const posts = await postsService.index();
    this.setState({ user:user, posts:posts });
  }

  render() {
    return (
      <div className="App">
        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/' render={()=> 
            userService.getUser() ?
            <NewsfeedPage 
              user={this.state.user}
              posts={this.state.posts}
              handleUpdatePosts={this.handleUpdatePosts}
            />
            :
            <Redirect to='/about' />
          }/>
          <Route exact path='/about' render={() => 
            <AboutPage />
            }/>
          <Route exact path='/signup' render={({ history })=> 
            <SignupPage 
            history={history}
            handleSignuporLogin={this.handleSignuporLogin}
            />
          }/>
          <Route exact path='/login' render={({ history })=>
            <LoginPage 
            history={history}
            handleSignuporLogin={this.handleSignuporLogin}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
