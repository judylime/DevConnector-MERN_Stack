const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('MongoDB Connected ... ');
    //Exit process with failure
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// mongoose.connect(db)
module.exports = connectDB;
