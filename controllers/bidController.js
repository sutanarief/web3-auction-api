const Bid = require('../models/Bid')

const createBid = async (req, res) => {
  try {
    const payload = req.body
    const bid = await Bid.create(payload)
    // const bid = new Bid({
    //   userId: "65a13da0acf4bb132eaa796c",
    //   itemId: "65a18baac00b64df3854b8c0",
    //   amount: 30,
    //   action: "bid",
    //   isActive: true
    // })
    res.status(201).json({ data: bid, msg: "Success create bid"})
  } catch (error) {
    console.log(error)
    res.status(400).json({msg: "Fail create bid"})
  }
}

const getBid = async (req, res) => {
  try {
    const bid = await Bid.find()
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