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
import socket from './socket'

class App extends Component {
  state = {
    user: null,
    notification: null,
    triggerWords: ['depression', 'anxiety', 'sexual violence', 'rape', 'sexual harassment', 'domestic violence', 'self-harm', 'suicide', 'relationships', 'breakups', 'work', 'loss', 'loneliness', 'stress', 'addiction', 'eating disorder']
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleSignuporLogin = async () => {
   await this.setState({user: userService.getUser()});
   socket.getUser();
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleUpdateUser = user => {
    this.setState({user: user})
  }

  handleRemoveNotification = () => {
    this.setState({notification:null})
  }

  async componentDidMount() {
    socket.registerApp(this);
    const user = userService.getUser();
    if(user) {
      socket.getUser()
      this.setState({ user:user });
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
          notification={this.state.notification}
          handleRemoveNotification={this.handleRemoveNotification}
        />
        <Switch>
          <Route exact path='/' render={()=> 
            this.state.user ?
            <NewsfeedPage 
              user={this.state.user}
              triggerWords={this.state.triggerWords}
              handleUpdateUser={this.handleUpdateUser}
            />
            :
            <Redirect to='/about' />
          }/>
          
          <Route exact path='/user' render={() => 
            this.state.user ?
            <ProfilePage 
              user={this.state.user}
              handleUpdateUser={this.handleUpdateUser}
              triggerWords={this.state.triggerWords}
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
