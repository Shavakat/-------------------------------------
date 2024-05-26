const Router = require('express')
const router = new Router()
const galleryController = require('../controllers/galleryController')

router.post('/', galleryController.create)
router.get('/', galleryController.getAll)
router.delete('/', galleryController.delete)




module.exports = router