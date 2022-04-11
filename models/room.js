import mongoose from 'mongoose'

const roomSchema = new mongoose.Schema({
  name: String,
  price: {
    type: Number,
    required: [true, "價格為必填欄位"]
  },
  rating: Number
}, { versionKey: false })

const Room = mongoose.model('Room', roomSchema)

export default Room
