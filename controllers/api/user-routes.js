const router = require('express').Router();
const bcrypt = require('bcrypt');
const express = require('express');
const fs = require('fs');
const path = require('path');
//const { User } = require('../models');

const { User } = require('../../models');
const withAuth = require('../../utils/auth');

const dataPath = path.join(__dirname,'./seeds/userData.json'); 
//const dataPath = '../seeds/userData.js'; 

console.log('data path', dataPath);

// GET /api/user
router.get("/", async (req, res) => {
    try{
        const users = await User.findAll();
        res.json(users);
    } catch (err){
        console.error('Error fetching users:', err);
    }
  
})

//const signupRouter = require('./api/user-routes');
//router.use('/signup', signupRouter);

// /api/user
//signup
router.post('/', async (req, res) => {
  try {
    const {username, password} =req.body; //changed from username to email
    console.log('username and pass', username, password);
    // Encrypt the password before storing it in the database

    const userData = await User.create({
      username,
      password,
    });
    //User.findAll
    //user.findByPk
    //req.session.user= userData;
    // Initialize user session upon signup
    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;
      res.status(200).json({ message: 'user created successfully', user: userData});
      // Respond with JSON data to trigger client-side redirection
      // res.json({ redirectUrl: '/profile' });
    });
    //req.session.user= userData;
    //res.status(200).json({ message: 'user created successfully, check json file', user: userData});

  } catch (err) {
    console.error('Signup error:', err);
    res
      .status(400)
      .json({ message: 'Unable to create account. Please try again.' });
  }
});

// Login route
//withAuth only on quiz and profile pages

//ONCE LOGGED IN NEEDS TO GO TO DASHBOARD
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Find the user by username
    const user = await User.findOne({ where: { username } }); //changed from username

    // Check if user exists and verify the password
        if (!user ) {
            return res.status(401).send('Unauthorized');
            //return res.redirect('/signup');
          }
          const isValid = await user.checkPassword(password);
          if(!isValid){
            return res.status(401).send('Wrong Password');
          }
          res.session.save(() => {
            req.session.userId = user.id;
            req.session.username = user.username;
            req.session.loggedIn = true;
            //res.status(200).json({user, message: 'You are now logged in!'});
            res.render('dashboard', { user });
          }); 
    // Send the token as a response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
