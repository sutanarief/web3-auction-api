const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = Schema ({
  address: String,
  balance: Number,
  isLogin: {
    type: Boolean,
    default: false
  },
  itemIds: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }],
  winItemIds: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }],
  biddedIds: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }],
  listedItems: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }],
  winItems: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }],
  watchedItems: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }],
  biddedItems: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }],
  bids: [{
    type: Schema.Types.ObjectId,
    ref: "Bid"
  }],
  history: [{
    type: Schema.Types.ObjectId,
    ref: "History"
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model("User", UserSchema)

module.exports = User