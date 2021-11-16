import express from "express";
const router = express.Router()
import {getData, postData} from "../controllers/dataController.js";
import protect from '../middleware/authMiddleware.js'

router.route('/').get(protect, getData).post(protect, postData)

export default router 