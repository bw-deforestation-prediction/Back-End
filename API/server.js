const express = require('express');
const server = express();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const helmet = require('helmet');
const db = require('../users/user-model')

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
server.post('/api/users', (req,res) => {
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



















module.exports = server;