const comments = [
    {
        id: 1,
        content: "This is comment1!"
    },
    {
        id: 2,
        content: "This is comment2!"
    },
    {
        id: 3,
        content: "This is comment3!"
    },
];

const getComments = async (req, res) => {
    res.status(200).json(comments);
};

const addComment = async (req, res) => {
    const comment = req.body;
    comment.id = comments.length + 1;
    comments.push(comment);
    res.status(201).json(comment);
};

module.exports = {
    getComments,
    addComment,
};