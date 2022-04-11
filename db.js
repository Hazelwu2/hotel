import mongoose from 'mongoose'

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test')
}

const roomSchema = new mongoose.Schema({
  name: String,
  price: {
    type: Number,
    required: [true, "價格為必填欄位"]
  },
  rating: Number,
  created_at: {
    type: Date,
    default: Date.now
  }
}, {
  versionKey: false
})

const Room = mongoose.model('Room', roomSchema)

// 方法一 new 實體 + save()
// const testRoom = new Room({
//   name: '單人房',
//   price: Math.random(),
//   rating: 4.5
// })
// testRoom.save()
//   .then(() => console.log('新增資料成功'))
//   .catch((error) => console.log('發生錯誤:', error.errors.price.properties.message))

// 方法二 create = new + save()
// Room.create({
//   name: '單人房',
//   price: Math.random(),
//   rating: 4.888
// })
//   .then(() => console.log('新增資料成功'))
//   .catch((error) => console.log('發生錯誤:', error.errors.price.properties.message))


export default main