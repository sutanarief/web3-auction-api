const User = require('../models/User')

const createUser = async (req, res) => {
  try {
    const payload = req.body
    const user = await User.create(payload)
    console.log(user)
    res.status(201).json({ data: user, msg: "Success create user"})
  } catch (error) {
    console.log(error)
    res.status(400).json({msg: "Fail create user"})
  }
}

const getUser = async (req, res) => {
  try {
    const user = await User.find()
    res.status(200).json({data: user, msg: "Success get user"})
  } catch (error) {
    console.log(error)
    res.status(400).json({msg: "Fail get user"})
  }
}

module.exports = {
  createUser,
  getUser
}