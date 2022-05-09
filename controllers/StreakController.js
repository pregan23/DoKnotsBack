const { Streak } = require('../models')
const middleware = require('../middleware')

const CreateNewStreak = async (req, res) => {
    try {
        let doKnotId = parseInt(req.params.doknotid)
        let streakBody = {
            doKnotId,
            ...req.body
        }
        let newStreak = await Streak.create(streakBody)
        res.send(newStreak)
    } catch (error) {
        throw error
    }
}

module.exports = {
    CreateNewStreak
}