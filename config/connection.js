// Connected to MongoDB using mongoose connect.

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/socialnetwork_db', {
   useNewUrlParser: true, 
   useUnifiedTopology: true 
  });

  module.exports = mongoose.connection;