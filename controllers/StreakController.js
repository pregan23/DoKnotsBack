const { Streak } = require('../models')
const middleware = require('../middleware')

const CreateNewStreak = async (req, res) => {
    try {
        let userId = parseInt(req.params.userid)
        let doKnotId = parseInt(req.params.doknotid)
        let streakBody = {
            userId,
            doKnotId
        }
        let newStreak = await Streak.create(streakBody)
        res.send(newStreak)
    } catch (error) {
        throw error
    }
}

const GetUserStreaks = async (req, res) => {
    try {
        let userId = req.params.userid
        let myStreaks = await Streak.findAll({
            where:{userId}
        })
        res.send(myStreaks)
    } catch (error) {
        throw error
}
}

module.exports = {
    CreateNewStreak,
    GetUserStreaks
}