const sequelize = require('../config/connection');
const { User, BlogPost, Comment}  = require('../models');

const blogData = require('./blogData');
const commentData = require('./commentData');
const userData = require('./userData');

const seedDB = async () => {
    try{
        await sequelize.sync({force: true});
        //await User.bulkCreate(userData);
        const users = await User.bulkCreate(userData,{
            individualHooks: true,
            returning: true,
        });
        console.log('user seeds successful!', users);

        await BlogPost.bulkCreate(blogData);
        await Comment.bulkCreate(commentData);
        console.log('Seed Data Worked!');
        process.exit(0);
    } catch(err){
        console.error(err);
        process.exit(1); //exit with error
    }
};

seedDB();