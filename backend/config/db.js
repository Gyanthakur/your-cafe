

import mongoose from "mongoose";

export const connectDB = async () => {
    const mongoURI = process.env.MONGO_URI; 
    if (!mongoURI) {
        console.error("MongoDB connection string is missing in the environment variables");
        process.exit(1); 
    }
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1);
    }
};
