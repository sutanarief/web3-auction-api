const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BidSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
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
// model Bid {
//   id        String   @id @default(auto()) @map("_id") @db.ObjectId
//   userId    String   @db.ObjectId
//   itemId    String   @db.ObjectId
//   createdAt DateTime @default(now())
//   action    String
//   isActive  Boolean
//   amount    Int
//   user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
//   item      Item     @relation(fields: [itemId], references: [id])
// }