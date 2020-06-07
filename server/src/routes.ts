import express, { request, response } from 'express'
import path from 'path'
import multer from 'multer'
import multerConfig from './config/multer'
import PoinstController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'
import { celebrate, Joi } from 'celebrate'

const routes = express.Router()
const pointsController = new PoinstController()
const itemsController = new ItemsController()
const upload = multer(multerConfig)

// Service Pattern
// Repository Pattern (Data Mapper)

routes.get('/items', itemsController.index)
routes.post('/points', 
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    }, {
        abortEarly: false
    }), 
    pointsController.create
)
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)
routes.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
routes.use('/uploads/storage', express.static(path.resolve(__dirname, '..', 'uploads', 'storage')))
routes.get('/', (request, response) => {
    return response.json({ message: `Next Level Week` })
})

export default routes
