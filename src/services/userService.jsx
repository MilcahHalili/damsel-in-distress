import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  .then(({token}) => {
    tokenService.setToken(token)
  });
}

function addTrigger(trigger){
  console.log(trigger)
  return fetch(BASE_URL + 'update', {
    method: 'PUT', 
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }, 
    body: JSON.stringify({trigger:trigger})
  })
  .then(res => res.json())
}

function getUser() {
  return tokenService.getUserFromToken();
}

function getFullUser(){
  return fetch(BASE_URL, {
    method: 'GET', 
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  })
  .then(res => res.json())
}

function logout() {
  tokenService.removeToken()
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  })
  .then(({token}) => tokenService.setToken(token));
}

export default {
  signup, 
  getUser,
  getFullUser,
  logout, 
  login, 
  addTrigger
};