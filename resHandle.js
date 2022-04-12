const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
  'Aceess-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET POST OPTIONS DELETE PATCH'
}

const successHandle = ({
  res, status = 'success', statusCode = 200, message = '成功', data = {}
}) => {
  res.writeHead(statusCode, headers)
  res.end(JSON.stringify({
    status,
    message,
    data
  }))
}

const errorHandle = ({
  res, status = 'failed', statusCode = 400, message = '操作有誤，欄位未正確填寫', data = {}, error
}) => {
  res.writeHead(statusCode, headers)
  res.end(JSON.stringify({
    status,
    message,
    data,
    error
  }))
}


export {
  successHandle,
  errorHandle
}