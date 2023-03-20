const express = require('express');
const { getComments, addComment } = require('../controllers/comments.controller');

const router = express.Router();

/* GET users listing. */
router.get('/', getComments);

router.post('/new', addComment);

module.exports = router;
