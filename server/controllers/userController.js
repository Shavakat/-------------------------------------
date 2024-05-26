const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/models');

const generateJWT = (id, name, roleId) => {
    return jwt.sign(
        { id, name, roleId: roleId },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {
    async registration(req, res, next) {
        const { name, password } = req.body
        if (!name || !password) {
            return next(ApiError.badRequest('Не корректный логин или пароль'))
        }
        const candidate = await User.findOne({ where: { name } })
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким именем уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({ name, password: hashPassword })
        const token = generateJWT(user.id, user.name, user.roleId)
        return res.json({ token })
    }

    async login(req, res, next) {
        const { name, password } = req.body
        const user = await User.findOne({ where: { name } })
        if (!user) {
            return next(ApiError.internal('Пользователь с таким именем не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан не верный пароль'))
        }
        const token = generateJWT(user.id, user.name, user.roleId)
        return res.json({token})
    }

    async check(req, res, next) {
       const token = generateJwt(req.user.id, req.user.name, req.user.roleId)
       return res.json(token)
    }

}

module.exports = new UserController()