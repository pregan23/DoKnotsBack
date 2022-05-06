const { User } = require('../models')
const middleware = require('../middleware')

const Register = async (req, res) => {
    try {
      const { userName, password,   } = req.body
      let passwordDigest = await middleware.hashPassword(password)
      const user = await User.create({ firstName, lastName, zipcode, age, userName, passwordDigest, avatar })
      res.send(user)
    } catch (error) {
      throw error
    }
  }