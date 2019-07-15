require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const plaid = require('plaid')

let PUBLIC_TOKEN = undefined

const client = new plaid.Client(
  process.env.PLAID_CLIENT_ID,
  process.env.PLAID_SECRET,
  process.env.PLAID_PUBLIC_KEY,
  plaid.environments[process.env.PLAID_ENV],
  {version: '2019-05-29', clientApp: 'My Wealth'}
)

const app = express()
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(bodyParser.json())

app.post('/api/v1/get_access_token', function(request, response, next) {
  PUBLIC_TOKEN = request.body.publicToken
  console.log('public-token:', PUBLIC_TOKEN)
  response.send(200)
})

app.get('/hello', (req, res) => {
  console.log('WOWOWOWOWOWOWOW')
  res.send('Hello World!')
})

app.listen(process.env.APP_PORT, () =>
  console.log(`Example app listening on port ${process.env.APP_PORT}!`)
)
