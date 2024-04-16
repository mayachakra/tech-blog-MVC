const router = require('express').Router();
const { BlogPost } = require('../../models');

//all posts (read)
router.get('/', async (req,res) => {
    const blogPosts = await BlogPost.findAll();
    res.render('homepage', { blogPosts });
});

//get a single post
router.get('/:id', async (req, res) => {
    const blogPost = await BlogPost.findByPk(req.params.id);
    if(!blogPost){
        return res.status(404).json({error: ' not found with primary key'});
    }
    res.render('singlepost', {blogPost});
});

//post (create)
router.post('/', async (req, res) => {
    const newPost = await BlogPost.create(req.body);
    res.status(201).json(newPost);
});


//update
router.put('/:id', async (req, res) => {
    const updatedPost = await BlogPost.update(req.body, {
        where: { id: req.params.id}
    });
    if(updatedPost[0] === 0){
        return res.status(404).json({error: ' post not found for update'});
    }
    res.status(200).json({message: 'Blog updated'});
});

//delete
router.delete('/:id', async (req, res) => {
    const deletedPost = await BlogPost.destroy({
        where: { id: req.params.id}
    });
    if(deletedPost === 0){
        return res.status(404).json({error: ' post not found '});
    }
    res.status(200).json({message: 'Blog post deleted'});
});


module.exports = router;