import mongoose from "mongoose";

const connectMongoDB_ = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Połączenie z bazą danych");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB_;
