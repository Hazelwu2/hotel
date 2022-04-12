import mongoose from 'mongoose'
import 'dotenv/config'

const DB = process.env.DB_URL.replace(
  '<PASSWORD>',
  process.env.DB_PASSWORD
)

async function main() {
  await mongoose.connect(DB)
}

export default main