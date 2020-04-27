const { app } = require('./src/app')
const { SERVER_PORT = 4000 } = process.env
app.listen(SERVER_PORT, () => {
  console.log(`Running a GraphQL API server at port ${SERVER_PORT}`)
})
