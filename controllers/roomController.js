import Room from '../models/room.js'
import { successHandle, errorHandle } from '../resHandle.js'

const handleBuffer = async (req, res) => {
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  return JSON.parse(Buffer.concat(buffers).toString())
}

export const createRooms = async (req, res) => {
  try {
    const { name, price, rating } = await handleBuffer(req)
    if (!name || !price || !rating) throw false

    Room.create({
      name,
      price,
      rating
    })
      .then(() => {
        successHandle({
          res,
          statusCode: 201,
          message: '新增成功囉',
          data: { name, price, rating }
        })
      })
      .catch((error) => {
        console.log(error)
        errorHandle({
          res,
          statusCode: 400,
        })
      })
  } catch (error) {
    errorHandle({
      res,
      statusCode: 500,
    })
    console.log(error)
  }

}

export const getRooms = async (req, res, next) => {

}