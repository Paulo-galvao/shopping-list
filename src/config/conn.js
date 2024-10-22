import mongoose from "mongoose";
const mongodb = process.env.MONGODB;
import "dotenv/config";

async function main() {
    try {
        await mongoose.connect(mongodb);
        console.log("Data base connected");
    } catch (error) {
        console.log(error.message);
    }
}

main();

export default mongoose;