const Post = require('../models/Post')

module.exports = {
    index, 
    create, 
    deletePosts
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

function deletePosts (req,res){
    console.log(req.body)
}