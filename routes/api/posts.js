const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');

router.get('/', postsCtrl.index);
router.get('/profile/', postsCtrl.userIndex)
router.post('/comment', postsCtrl.addComment)
router.post('/create', postsCtrl.create)
router.delete('/delete', postsCtrl.deletePosts)


module.exports = router;
