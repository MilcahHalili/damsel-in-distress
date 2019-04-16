const jwt = require('jsonwebtoken');
const controller = require('./controllers/posts')
const Post = require('./models/post')

let io;

module.exports = {
  init
}

function init(http) {
  io = require('socket.io')(http);

  io.on('connection', function(socket) {
    socket.on('get-user', async function(token) {
        const user = await validateToken(token);
        socket.join(user._id)
        if (!user) return;
    })
    socket.on('get-comment', async function(data){
        const user = await validateToken(data.token)
        if (!user) return;
        const post = await Post.findById(data.post_id)
            io.to(post.user).emit('new-comment', post);
        });
    })
}

function validateToken(token) {
    return new Promise(function(resolve) {
      jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) resolve(false);
        resolve(decoded.user);    
      });
    });
};