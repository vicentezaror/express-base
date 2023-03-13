const { Router } = require('express');

const { getAllUsers, createUser, getUserById, updateUser } = require('../controllers/user.controllers')
const validatorHandler = require('../middlewares/validator.handler')
const { idUserSchema, createUserSchema, updateUserSchema } = require('../schemas/user.dto')

const userRoutes = Router();

userRoutes.get('/', getAllUsers)
userRoutes.get('/:id',
  validatorHandler(idUserSchema, 'params'),
  getUserById
)
userRoutes.post('/',
  validatorHandler(createUserSchema, 'body'),
  createUser
)
userRoutes.patch('/:id',
  validatorHandler(idUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  updateUser
)

module.exports = userRoutes;