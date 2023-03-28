const express = require('express');
const { getComments, addComment } = require('../controllers/comments.controller');

const router = express.Router();
router.get('/', getComments);

router.get('/:id', getComments);

router.post('/:id/new', addComment);

module.exports = router;
