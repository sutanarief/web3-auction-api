const User = require('../models/User')

const loginUser = async (req, res) => {
  try {
    const payload = req.body
    const user = await User.create(payload)
    res.status(201).json({ data: user, msg: "Success create user"})
  } catch (error) {
    console.log(error)
    res.status(400).json({msg: "Fail create user"})
  }
}

const logoutUser = async (req, res) => {
  try {
    const filter = { address: req.body.addres}
    const update = { isLogin: false }
    await User.findOneAndUpdate()
    res.status(200).json({ data: null, msg: 'logged in'})
  } catch (error) {
    res.status(400).json({ data: error, msg: 'error login'})
  }
}

const getUserById = async (req ,res) => {
  try {
    const address = req.params.address
    const user = await User.findOne({ address })
    res.status(200).json({ data: user, msg: "Success get user detail"})
  } catch (error) {
    console.log(error)
    res.status(400).json({ msg: "Fail get detail user" })
  }
}

const getUser = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json({data: users, msg: "Success get user"})
  } catch (error) {
    console.log(error)
    res.status(400).json({msg: "Fail get user"})
  }
}

module.exports = {
  loginUser,
  logoutUser,
  getUser,
  getUserById
}