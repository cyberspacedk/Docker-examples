const express = require('express');
const mongoose = require('mongoose');
const app = express();

const { port } = require('./config')
const { connectDB } = require('./helpers/db')

const postSchema = new mongoose.Schema({
  title: String
});

const Post = mongoose.model('Post', postSchema);

const startServer = () => {
  app.listen(port, () => {

    console.log('Server started at 9000 port');

    const createdPost = new Post({
      title: 'Post title'
    });

    console.log('DB POST WITH VOLUME', createdPost)

  });
}

app.get('/test', (req, res) => {
  res.send('Api work')
})

connectDB()
  .on('error', console.error)
  .on('disconnect', connectDB)
  .on('open', startServer)