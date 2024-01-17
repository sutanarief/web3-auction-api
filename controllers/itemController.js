const Item = require('../models/Item')
const { editUser } = require('./userController')

const createItem = async (req, res) => {
  try {
    const payload = req.body
    const item = await Item.create(payload)
    console.log(item)
    res.status(201).json({ data: item, msg: "Success create Item"})
  } catch (error) {
    console.log(error)
    res.status(400).json({msg: "Fail create Item"})
  }
}

const getItem = async (req, res) => {
  try {
    const item = await Item.find().populate('bids', 'amount').exec()
    res.status(200).json({data: item, msg: "Success get Item"})
  } catch (error) {
    console.log(error)
    res.status(400).json({msg: "Fail get Item"})
  }
}

module.exports = {
  createItem,
  getItem
}