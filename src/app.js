import express from "express";
import "dotenv/config";
import productRouter from "./routes/product-route.js";

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/product", productRouter);

app.listen(port, () => console.log("Server running at port", port));