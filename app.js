import Room from './models/room.js'
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
  'Aceess-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET POST OPTIONS DELETE PATCH'
}

export default async (req, res) => {
  if (req.method == 'GET' && req.url == '/rooms') {
    const room = await Room.find()
    res.writeHead(200, headers)
    res.write(JSON.stringify({
      status: 'success',
      data: room
    }))
    res.end()
  }
}