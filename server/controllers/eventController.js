const uuid = require('uuid')
const path = require('path');

const {Event} = require('../models/models')
const ApiError = require('../error/ApiError')

class EventController {
    async create(req, res, next) {
        try {
            const {name, description, adress, time, date, price} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".png"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const event = await Event.create({name, description, adress, time, date, price, img: fileName})
            return res.json(event)
        }
        
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const events = await Event.findAll()
        return res.json(events)
    }

    async delete(req, res) {

    }

}

module.exports = new EventController()