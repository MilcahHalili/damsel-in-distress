import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import NewsfeedPage from './pages/NewsfeedPage/NewsfeedPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import NavBar from './components/NavBar/NavBar'

import userService from './services/userService'
import postsService from './services/postsService'

class App extends Component {
  state = {
    user: null,
    posts: [],
    triggerWords: ['depression', 'anxiety', 'sexual violence', 'rape', 'sexual harassment', 'domestic violence', 'self-harm', 'suicide', 'relationships', 'breakups', 'work', 'loss', 'loneliness', 'stress']
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
            this.state.user ?
            <NewsfeedPage 
              user={this.state.user}
              posts={this.state.posts}
              handleUpdatePosts={this.handleUpdatePosts}
              triggerWords={this.state.triggerWords}
            />
            :
            <Redirect to='/about' />
          }/>
          <Route exact path='/user' render={() => 
            <ProfilePage 
              user={this.state.user}
              posts={this.state.posts}
              handleUpdatePosts={this.handleUpdatePosts}
              triggerWords={this.state.triggerWords}
            />
          }
          />
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
