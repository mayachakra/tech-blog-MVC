//'use strict';
//const Comment = require("../models/Comment");

const commentData = [
    {
        comment_text: 'Great Blog!',
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: 'Nice Job!',
        user_id: 2,
        post_id: 1,
    },
];

//const seedComments = () => Comment.bulkCreate(commentData);

module.exports = commentData;