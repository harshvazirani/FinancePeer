import asyncHandler from 'express-async-handler'
import Data from '../models/data.js'

// @desc Fetch all data
// @route GET /api/data
// @access Private
const getData = asyncHandler(async (req, res) => {
    const data = await Data.findAll()
    res.status(200).json(data)
})

// @desc Import data
// @route POST /api/data
// @access Private
const postData = asyncHandler(async (req, res) => {
    const data = req.body
    data.forEach(async (element) => {
        await Data.create(element)
    });
    res.status(200).json("Imported")
})

export {getData, postData}