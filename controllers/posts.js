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
        await Post.create({text: req.body.post});
        index(req, res);
    } catch (err) {
        res.json({err})
    }
}

async function deletePosts (req,res){
    try {
        await Post.findOneAndDelete(id=req.body.id)
        index(req, res);
    } catch (err) {
        res.json({err})
    }
}

async function addComment (req, res) {
    console.log(req.body.comment)
    console.log(req.body.post_id)
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