const mongoose = require('mongoose');

const { db } = require('../config');

exports.connectDB = () => {
  mongoose.connect(db, { useNewUrlParser: true });

  return mongoose.connection;
}