
const uuid = require('uuid')
const path = require('path');
const {Gallery} = require('../models/models')
const ApiError = require('../error/ApiError')

class GalleryController {
    async create(req, res) {
        try {
            const {img} = req.files
            let fileName = uuid.v4() + ".png"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const gallery = await Gallery.create({img: fileName})
            return res.json(gallery)
        }
        
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const galleries = await Gallery.findAll()
        return res.json(galleries)
    }

    async delete(req, res) {

    }

}

module.exports = new GalleryController()