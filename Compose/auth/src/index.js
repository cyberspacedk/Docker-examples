const express = require('express');
const app = express();

const { port } = require('./config')
const { connectDB } = require('./helpers/db')

const startServer = () => {
  app.listen(port, () => {
    console.log(`Server started at ${port} port`);
  });
}

app.get('/test', (req, res) => {
  res.send('AUTH  works')
})

connectDB()
  .on('error', console.error)
  .on('disconnect', connectDB)
  .on('open', startServer)