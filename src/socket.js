import tokenService from './services/tokenService';

const socket = window.io();
let App = null;

/*--- This is so that this module can setState on App ---*/
function registerApp(app) {
  App = app;
}

/*--- Listeners for messages from server ---*/
socket.on('new-comment', function(notification) {
    App.setState({notification});
});

function getUser() {
    socket.emit('get-user', tokenService.getToken());
  }

function getComment(post_id){
    socket.emit('get-comment', {token: tokenService.getToken(), post_id: post_id})
}

  export default {
    registerApp,
    getUser,
    getComment,
  }