const Post = require('../models/post')
const User = require('../models/user')

module.exports = {
    index, 
    create, 
    deletePosts, 
    addComment, 
    deleteComment,
    userIndex
}

async function index (req, res){
    const posts = await Post.find({})
    .sort({createdAt: -1})
    return res.json(posts)
}

async function userIndex(req, res){
    const posts = await Post.find({user: req.user._id})
    .sort({createdAt: -1})
    return res.json(posts)
}

async function create (req, res){
    try {
        await Post.create({text: req.body.post.text, tags: req.body.post.tags, user: req.user._id});
        index(req, res);
    } catch (err) {
        res.json({err})
    }
}

async function deletePosts(req,res){
    try {
        await Post.findByIdAndDelete(req.body.post_id)
        index(req, res);
    } catch (err) {
        res.json({err})
    }
}

async function deleteComment(req,res){
    try {
      await Post.findByIdAndUpdate(req.body.post_id, {
            $pull: {
              comments: {_id: req.params.id}
            }})
        index(req, res);
    } catch (err) {
        res.json({err})
    }
}

async function addComment (req, res) {
    try {
        await Post.findById(req.body.post_id, function (err, post){
            post.comments.push({text: req.body.comment, user: req.user._id});
            post.save();
            index(req,res);
        }) 
    } catch (err){
            res.json({err})
    }
}