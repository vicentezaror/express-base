const { Router } = require('express');

const { getAllUsers, createUser, getUserById } = require('../controllers/user.controllers')

const userRoutes = Router();

userRoutes.get('/', getAllUsers)
userRoutes.get('/:id', getUserById)
userRoutes.post('/', createUser)

module.exports = userRoutes;