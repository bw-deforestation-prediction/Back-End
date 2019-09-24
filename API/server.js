const express = require('express');
const server = express();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const helmet = require('helmet');
const db = require('../users/user-model')
const secrets = require('../secrets/secret')
var cors = require('cors');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/test', (req,res) => {
    res.json('it working!')
})

//GET users
server.get('/api/users', (req,res) => {
    db.getUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({message: "Fail to retrieve users"})
        })
})

//POST a user
server.post('/api/users/register', (req,res) => {
    const userData = req.body;
    console.log(userData)
    const hash = bcrypt.hashSync(userData.password, 12)
    userData.password = hash;
   
    db.addUser(userData)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//POST to verify user for login
server.post('/api/users/login', (req,res)=> {
    let {email, password} = req.body;

    db.findUser({email})
        .first()
        .then(user => {
            console.log(user)
            if (user && bcrypt.compareSync(password, user.password)){
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome!`, token 
                })
            } else {
                res.status(401).json({message: 'Invalid credentials'})
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

function generateToken(user){
    const payload = {
        email: user.email
    };
    const secret = secrets.jwtSecret
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, secret, options)
}

//POST user profile
server.post('/api/users/profile', (req,res) => {
    const userProfile = req.body
    db.createProfile(userProfile)
        .then(profile => {
            res.status(200).json(profile);
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


















module.exports = server;