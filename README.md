
<div align="center">
  <a href="https://github.com/Hazelwu2/hotel.git">
    <img src="./logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Hotel List</h3>

  <p align="center">
    🌱 Hotel API in Node.js
    <br />
    <a href="https://github.com/Hazelwu2/hotel/issues">Report Bug</a>
    ·
    <a href="https://hazel-hotel.herokuapp.com/rooms">Demo</a>
  </p>
</div>

## 🛖 About This Project
設計一個 /rooms 路由，CRUD

* 上傳 [GitHub](https://github.com/Hazelwu2/posts-mongoose-week2.git)
* .env 忽略，不能在 GitHub 上
* 請連接 mongodb 雲端 atlas 資料庫
* dotenv 加上環境變數，讓程式更安全
* 部署到 [heroku 主機](https://hazel-hotel.herokuapp.com/rooms)

API 規格

* Create：建立 Room，[POST] /rooms/
* Read：閱讀 Room，[GET] /rooms/
* Edit：編輯 Room，[GET] /rooms/{id}
* Delete：刪除單篇 Room，[DELETE] /rooms/{id}
* Delete：刪除所有 Room，[DELETE] /rooms/


## 🔨 Built With
此專案會用到的 Framework / Library 或工具

* [Nodejs](https://github.com/nodejs)
* [Heroku](https://www.heroku.com/)
* [Git](https://git-scm.com/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Mongoose](https://mongoosejs.com/)
* [dotenv](https://www.npmjs.com/package/dotenv)

## 👨‍💻 Getting Started
以下照著範例做，可以讓你在本地端 run 此專案

1. Clone the Repo
  ```sh
    git clone https://github.com/Hazelwu2/hotel.git
  ```
2. Install NPM packages
  ```
  cd posts-mongoose-week2
  npm install
  ```
3. Setup .env to connect DB
  ```
  cp .env.example .env
  設定 .env 參數 DB_URL, DB_PASSWORD，遠端資料庫使用 MongoDB Atlas
  ```

3. Start Runing Server
  ```
  npm run dev
  ```
4. Deploy to heroku
  ```
  herku create hotel
  git push heroku main
  ```
5. Setting Heroku Variable
  ```
  Project/Settings
  Config Vars Add "DB_URL", "DB_PASSWORD"
  ```
6. DEBUG in Heroku
  ```
  heroku logs --tail
  ```
