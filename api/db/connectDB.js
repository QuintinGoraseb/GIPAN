import mongoose from "mongoose";


export const connectDB = async () => {
	try {
		//console.log("mongo_uri: ", 'mongodb+srv://quintingoraseb:qr8xM5rkwWTXdVnG@gipan.ypv5m.mongodb.net/');
		const conn = await mongoose.connect('mongodb+srv://quintingoraseb:qr8xM5rkwWTXdVnG@gipan.ypv5m.mongodb.net/auth_db');
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connection to MongoDB: ", error.message);
		process.exit(1); // 1 is failure, 0 status code is success
	}
};