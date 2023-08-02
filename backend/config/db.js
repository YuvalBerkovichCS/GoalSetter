const mongoose = require("mongoose");
const uri =
  process.env.MONGO_URI ||
  "mongodb+srv://yuvalberkovichcs:1234qwer@CostManagerDatabase.3r1tq3e.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
