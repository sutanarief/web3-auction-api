const Bid = require('../models/Bid')

const createBid = async (req, res) => {
  try {
    const payload = req.body
    // const bid = await Bid.create(payload)
    const bid = payload
    console.log(bid)
    res.status(201).json({ data: bid, msg: "Success create bid"})
  } catch (error) {
    console.log(error)
    res.status(400).json({msg: "Fail create bid"})
  }
}

const getBid = async (req, res) => {
  try {
    // const bid = await Bid.find()
    const bid = 'ini bid'
    res.status(200).json({data: bid, msg: "Success get bid"})
  } catch (error) {
    console.log(error)
    res.status(400).json({msg: "Fail get bid"})
  }
}

module.exports = {
  createBid,
  getBid
}