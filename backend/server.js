import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import sequelize from './config/db.js'
import dataRoutes from './routes/dataRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

const app = express()

app.use(cors())

if(process.env.NODE_ENV == 'development')
app.use(morgan('dev'))

app.use(express.json())

app.use('/api/users', userRoutes)

app.use('/api/data', dataRoutes)

app.get('/', (req, res) => {res.send('API is running...')})

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

sequelize
  .sync({force : true})
  .then(() => {
    app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
  })
  .catch(err => {
    console.log(err);
  });