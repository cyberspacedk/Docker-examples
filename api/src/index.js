const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.send('Api work')
})

app.listen(process.env.PORT, () => {
  console.log('Server started at 9000 port')
})