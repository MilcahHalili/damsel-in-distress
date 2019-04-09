const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');

router.get('/', postsCtrl.index);
router.get('/:id', postsCtrl.userIndex)
router.post('/:id', postsCtrl.create)
router.delete('/delete', postsCtrl.deletePosts)
router.post('/comment', postsCtrl.addComment)

module.exports = router;
