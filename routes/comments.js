const express = require('express');
const { getComments, addComment } = require('../controllers/comments.controller');
const router = express.Router();

const calculateTime = (req, res, next) => {
    const start = new Date();
    res.on('finish', () => {
      const end = new Date();
      const time = end - start;
      console.log(`Request method: ${req.method} - takes: ${time}ms`);
    });
    next();
};

//router.get('/', getComments);

router.get('/:id', calculateTime, getComments);

router.post('/:id/new', calculateTime, addComment);

module.exports = router;
