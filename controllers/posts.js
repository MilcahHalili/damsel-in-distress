const Post = require('../models/Post')
const User = require('../models/User')

module.exports = {
    index, 
    create, 
    deletePosts, 
    addComment, 
    userIndex
}

async function index (req, res){
    const posts = await Post.find({})
    .sort({createdAt: -1})
    return res.json(posts)
}

async function userIndex(req, res){
    const user = await User.findById(req.params.id).populate('posts')
    const posts = user.posts
    console.log(posts)
    return res.json(posts)
}

async function create (req, res){
    try {
        const post = await Post.create({text: req.body.post.text, tags: req.body.post.tags});
        const user = await User.findById(req.params.id)
        user.posts.push(post)
        user.save()
        index(req, res);
    } catch (err) {
        console.log(err)
        res.json({err})
    }
}

async function deletePosts (req,res){
    try {
        await Post.findByIdAndDelete(req.body.post_id)
        index(req, res);
    } catch (err) {
        res.json({err})
    }
}

async function addComment (req, res) {
    console.log('here')
    try {
        await Post.findById(req.body.post_id, function (err, post){
            post.comments.push({text: req.body.comment});
            post.save();
            index(req,res);
        }) 
    } catch (err){
            res.json({err})
    }
}