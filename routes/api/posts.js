const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');

router.get('/', postsCtrl.index);
router.post('/', postsCtrl.create)
router.delete('/delete', postsCtrl.deletePosts)

module.exports = router;