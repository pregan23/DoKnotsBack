const { DoKnot } = require('../models')
const middleware = require('../middleware')

const AddDoKnot = async (req, res) => {
    try {
        let userId = parseInt(req.params.id)
        let DoKnotBody = {
            userId,
            ...req.body
        }
        let newDoKnot = await DoKnot.create(DoKnotBody)
        res.send(newDoKnot)
    } catch (error) {
        throw error
    }
}

module.exports = {
    AddDoKnot
}