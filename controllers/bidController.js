const Bid = require('../models/Bid')
const Item = require('../models/Item')

const createBid = async (req, res) => {
  try {
    const payload = req.body
    const item = await Item.findById(payload.itemId)
    const bid = await Bid.create(payload)
    item.bids.push(bid)
    await item.save()

    res.status(201).json({ data: bid, msg: "Success create bid"})
  } catch (error) {
    console.log(error)
    res.status(400).json({msg: "Fail create bid"})
  }
}

const getBid = async (req, res) => {
  try {
    const itemId = req.params.id
    const bid = await Bid.find({ itemId })
    res.status(200).json({data: bid, msg: "Success get bid"})
  } catch (error) {
    console.log(error)
    res.status(400).json({msg: "Fail get bid"})
  }
}

const createBuyout = async (req, res) => {
  try {
    const payload = req.body
    const bid = await Bid.create(payload)
    const filter = { _id: payload.itemId }
    const update = { 
      isActive: false, 
      isEnded: true, 
      winnerId: payload.userId,
      winnerBidId: bid.id
    }
    const item = await Item.findOneAndUpdate(filter, update)
    res.status(201).json({ data: bid, msg: "Success buyout item"})
  } catch (error) {
    console.log(error)
    res.status(400).json({ msg: "Fail get bid" })
  }
}

module.exports = {
  createBid,
  getBid,
  createBuyout
}