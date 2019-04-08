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

  async componentDidMount() {
    const user = userService.getUser();
    this.setState({ user });
  }

  render() {
    return (
      <div className="App">
      <NavBar />
      <Switch>
        <Route exact patch='/' render={()=> 
          <NewsfeedPage 
          user={this.state.user}/>
          }/>
        <Route exact path='/about' render={() => 
          <AboutPage />
          }/>
        <Route exact path='/signup' render={({ history })=> 
          <SignupPage 
          history={history}
          handleSignUporLogin={this.handleSignUporLogin}
          />
        }/>
        <Route exact path='/login' render={({ history })=>
          <LoginPage 
          history={history}
          handleSignUporLogin={this.handleSignUporLogin}
          />
        }/>
      </Switch>
      </div>
    );
  }
}

export default App;
