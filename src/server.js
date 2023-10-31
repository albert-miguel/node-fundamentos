import http from 'node:http'

// rota de criação de usuário (nome , email, senha)

const server = http.createServer((req, resp) => {
  return resp.end('Hello Michael!')
})

server.listen(3333)