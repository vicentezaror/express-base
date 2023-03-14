const Joi = require('joi');

const id = Joi.string().guid({ version: 'uuidv4' })
const firstName = Joi.string().min(2).max(30)
const lastName = Joi.string().min(2).max(30)
const phone = Joi.string().min(8).max(15)
const email = Joi.string().email()
const password = Joi.string().min(6).max(30)
const birthDay = Joi.date().less('now')

const idUserSchema = Joi.object({
  id: id.required()
})

const createUserSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  email: email.required(),
  password: password.required(),
  birthDay: birthDay.required()
})

const updateUserSchema = Joi.object({
  firstName,
  lastName,
  phone,
  email,
  password,
  birthDay
}).min(1)

module.exports = {
  idUserSchema,
  createUserSchema,
  updateUserSchema
}