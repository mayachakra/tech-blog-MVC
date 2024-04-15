//'use strict';
//const User = require("../models/User");
const bcrypt = require('bcrypt');

const placehold = 10;
const hashPass = bcrypt.hashSync('password123', placehold);

const userData = [
    {
        username: 'mayachakra',
        password: hashPass,
    },
    {
        username: 'techbl0gger',
        password: hashPass,
    },
];

//const seedUserData = () => User.bulkCreate(userData);


module.exports = userData;