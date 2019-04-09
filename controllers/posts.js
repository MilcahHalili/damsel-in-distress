const Post = require('../models/Post')

module.exports = {
    index, 
    create, 
    deletePosts, 
    addComment
}

async function index (req, res){
    const posts = await Post.find({})
    .sort({createdAt: -1})
    return res.json(posts)
}

async function create (req, res){
    try {
        const post = await Post.create({text: req.body.post.text, categories: req.body.post.categories});
        console.log(post)
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