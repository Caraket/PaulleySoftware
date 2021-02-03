const bcrypt = require('bcryptjs');
const express = require('express');
const User = require('../Models/User');
const router = express.Router();

// signup route

router.post('/signup', async(req, res) => {
    const body = req.body;

    if(!(body.email && body.password)){ 
        return res.status(400).send({ error: 'Invalid Credentials'});
    }


    // Create a new mongoose doc from user data
    const user = new User(body);
    // Generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // Now set user password to hashed password
    user.password = await bcrypt.hash(user.password, salt);
    user.save().then((doc) => res.status(201).send(doc));
});

// Login Route
router.post('/login', async (req, res) => {
    const body = req.body;
    const user = await User.findOne({email: body.email});
    if(user){
        // check user password with hashed password stored in the doc
        const validPassword = await bcrypt.compare(body.password, user.password);
        if(validPassword) {
            res.status(200).json({ message: "Valid password" });
        } else {
            res.status(400).json({ error: "Invalid Password" });
        }
    } else{
        res.status(401).json({ error: "Invalid Credentials" });
    }
});

module.exports = router;