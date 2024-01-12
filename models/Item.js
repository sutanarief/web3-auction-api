const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema ({
  title: String,
  description: String,
  startDate: Date,
  endDate: Date,
  isActive: Boolean,
  isEnded: Boolean,
  buyoutPrice: Number,
  initialPrice: Number,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date,
    default: Date.now
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  winnerId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  winnerBidId: {
    type: Schema.Types.ObjectId,
    ref: "Bid"
  },
  joinedUserIds: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  watchBy: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  bids: [{
    type: Schema.Types.ObjectId,
    ref: "Bid"
  }]
})

// model Item {
//   id           String   @id @default(auto()) @map("_id") @db.ObjectId
//   title        String
//   description  String
//   startDate    DateTime
//   endDate      DateTime
//   isActive     Boolean
//   category     String
//   imageSrc     String
//   buyoutPrice  Int
//   initialPrice Int
//   isEnded      Boolean
//   createdAt    DateTime @default(now())
//   updatedAt    DateTime @updatedAt
//   userId       String   @db.ObjectId
//   winnerId     String?  @db.ObjectId
//   bidId        String?  @db.ObjectId
//   userIds      String[] @db.ObjectId
//   bidderIds    String[] @db.ObjectId
//   owner        User     @relation("UserItems", fields: [userId], references: [id], onDelete: Cascade)
//   watchBy      User[]   @relation("WatchedItems", fields: [userIds], references: [id])
//   bidders      User[]   @relation("BidderId", fields: [bidderIds], references: [id])
//   winner       User?    @relation("WinItem", fields: [winnerId], references: [id])

//   bids    Bid[]
//   History History[]
// }


const Item = mongoose.model("Item", ItemSchema)

module.exports = Item