import mongoose from "mongoose";

export const connectDB = async () => {
    // await mongoose.connect('mongodb+srv://bhanu:foodordernow@cluster0.x2wqm.mongodb.net/food-order-now')
    //  await mongoose.connect('mongodb+srv://bhanu:foodordernow@cluster0.x2wqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"))
     await mongoose.connect('mongodb+srv://bhanu:foodordernow@cluster0.x2wqm.mongodb.net/food-order-now').then(()=>console.log("DB Connected"))
}