import { getRooms, createRooms } from './controllers/roomController.js'


export default async (req, res) => {
  const { method, url } = req

  if (method == 'GET' && url == '/rooms') getRooms(req, res)
  else if (method === 'POST' && url === '/rooms') createRooms(req, res)
}