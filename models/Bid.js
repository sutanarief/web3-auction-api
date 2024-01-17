const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BidSchema = new Schema({
  userId: {
    type: String,
    ref: "User"
  },
  itemId: {
    type: Schema.Types.ObjectId,
    ref: "Item"
  },
  action: String,
  isActive: Boolean,
  amount: Number
})

const Bid = mongoose.model("Bid", BidSchema)

module.exports = Bid