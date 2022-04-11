import http from 'http'
import app from './app.js'
import db from './db.js'

const PORT = 3005

// 資料庫連接
db()
  .then(() => console.log('資料庫連接成功'))
  .catch(error => console.log('資料庫連接失敗 Error: ', error))

// 啟動 Server
const server = http.createServer(app)
server.listen(PORT, () => console.log(`Server Running in localhost:${3005}`))