import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/user.js'

// @desc Auth User & get token
// @route GET /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({where : {email : email}})
    if(user) {
        if(user.password == password)
          res.json({
              id: user.dataValuesid,
              email: user.dataValues.email,
              token: generateToken(user.id)
          })

          else {
            res.status(401)
            throw new Error('Invalid Email or Password')
          }
    }
    else {
        res.status(401)
        throw new Error('User not found')
    }
})

// @desc Register a new User
// @route POST api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    const userExists = await User.findAll({where : {email : email}, limit : 1})
    console.log("USER EXISTS : " , userExists)
    if(userExists.length == 1){
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        email : email,
        password : password
    })

    if(user) {
        res.status(201).json({
            id: user.id,
            email: user.email,
            token: generateToken(user.id)
        })
    }
    else {
        res.status(400)
        throw new Error('User not found')
    }
})

export {authUser, registerUser}
