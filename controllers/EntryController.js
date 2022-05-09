const { Entry } = require('../models')
const middleware = require('../middleware')

const NewEntry = async (req, res) => {
    try {
        let userId = parseInt(req.params.userid)
        let entryBody = {
            userId,
            ...req.body
        }
        let newEntry = await Entry.create(entryBody)
        res.send(newEntry)
    } catch (error) {
        throw error
}
}

const GetUsersEntries = async (req, res) => {
    try {
        let userId = req.params.userid
        let myEntries = await Entry.findAll({
            where: {
                userId
            }
        })
        res.send(myEntries)
    } catch (error) {
        throw error
}
}

const EditEntry = async (req, res) => {
    try {
        let userId = req.params.userid
        let id = req.params.entryid
        let updated = Entry.update(req.body,{
            where: {
                id,
                userId
            }
        }) 
        res.send(req.body)
    } catch (error) {
        throw error
}
}

const DeleteEntry = async (req, res) => {
    try {
        let userId = req.params.userid
        let id = req.params.entryid
        let deleted = Entry.destroy({
            where: {
                id,
                userId
            }
        })
        res.send(`Entry ${id} deleted`)
    }  catch (error) {
        throw error
}
}

module.exports = {
    NewEntry,
    GetUsersEntries,
    EditEntry,
    DeleteEntry
}