import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'

const protect = asyncHandler(async (req, res, next) => {
    let token 

    try {
        token = req.headers.authorization.split(' ')[1]
        jwt.verify(token, process.env.JWT_SECRET)
        next()
    } catch(error) {
        console.error(error)
        res.status(401)
        throw new Error('Not authorized, token failed')
    }

    if(!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

export default protect 