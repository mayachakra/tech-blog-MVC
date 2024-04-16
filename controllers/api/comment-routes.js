const router = require('express').Router();
const { Comment } = require('../../models');

//all posts (read)
router.get('/:postId', async (req,res) => {
    const comments = await Comment.findAll({
        where: {post_id: req.params.postId}
    });
    //res.render('homepage', { blogPosts });
    res.json(comments);
});

//post (create)
router.post('/', async (req, res) => {
    const newComment = await Comment.create(req.body);
    res.status(201).json(newComment);
});


//update
router.put('/:id', async (req, res) => {
    const updatedComment = await Comment.update(req.body, {
        where: { id: req.params.id}
    });
    if(updatedComment[0] === 0){
        return res.status(404).json({error: ' comment not found for update'});
    }
    res.status(200).json({message: 'Comment updated'});
});

//delete
router.delete('/:id', async (req, res) => {
    const deletedComment = await Comment.destroy({
        where: { id: req.params.id}
    });
    if(deletedComment === 0){
        return res.status(404).json({error: ' comment not found '});
    }
    res.status(200).json({message: 'Comment deleted'});
});


module.exports = router;