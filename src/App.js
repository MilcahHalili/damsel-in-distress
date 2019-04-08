import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import NewsfeedPage from './pages/NewsfeedPage/NewsfeedPage'
import AboutPage from './pages/AboutPage/AboutPage'
import NavBar from './components/NavBar/NavBar'

import userService from './services/userService'

class App extends Component {
  state = {
    user: null
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
    this.setState({ user });
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
          <NewsfeedPage 
          user={this.state.user}/>
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
