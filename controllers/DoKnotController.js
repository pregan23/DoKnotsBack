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

const GetUserDoKnots = async (req, res) => {
    try {
        let userId = req.params.id
        let myDoKnots = await DoKnot.findAll({
            where:{userId}
        })
        res.send(myDoKnots)
    } catch (error) {
        throw error
}
}

const UpdateDoKnot = async (req, res) => {
    try{
        let id = req.params.doknotid
        let userId = req.params.userid
        let updated = await DoKnot.update(req.body, {
            where: { userId,
                     id
            }
        }
        )
        res.send(updated)
    } catch (error) {
        throw error
}
}

const RemoveDoKnot = async (req, res) => {
    try {
        let id = req.params.doknotid
        let userId = req.params.userid
        let deleted = await DoKnot.destroy({
            where: {
                userId,
                id
            }
        })
        res.send(`deleted DoKnot with id of ${id}`)
    }  catch (error) {
        throw error
}
}

module.exports = {
    AddDoKnot,
    UpdateDoKnot,
    GetUserDoKnots,
    RemoveDoKnot
}