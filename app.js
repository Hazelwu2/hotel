import {
  getRooms,
  createRooms,
  deleteRooms
} from './controllers/roomController.js'
import { errorHandle } from './resHandle.js'


export default async (req, res) => {
  const { method, url } = req

  if (method == 'GET' && url == '/rooms') getRooms(req, res)
  else if (method === 'POST' && url === '/rooms') createRooms(req, res)
  else if (method === 'DELETE' && url === '/rooms') deleteRooms(req, res)
  else errorHandle({ res, message: '無此路由' })
}