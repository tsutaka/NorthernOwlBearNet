// HTTP server init
const express = require('express')
const app = express()

const portNo = 3001
app.listen(portNo, () => {
  console.log('', 'https://localhost:' + portNo)
})

app.get('/', (req, res) => { 
  res.send('Hello World!');
})
