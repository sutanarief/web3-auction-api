const Item = require('../models/Item')

const createItem = async (req, res) => {
  try {
    const payload = req.body
    // const item = await Item.create(payload)
    const item = payload
    console.log(item)
    res.status(201).json({ data: item, msg: "Success create Item"})
  } catch (error) {
    console.log(error)
    res.status(400).json({msg: "Fail create Item"})
  }
}

const getItem = async (req, res) => {
  try {
    // const item = await Item.find()
    const item = 'ini item'
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