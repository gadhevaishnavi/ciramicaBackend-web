import express from "express";
import cors from "cors";
import productRoute from "./routes/productRoute.js";
import dbConnect from "./db/connectionDB.js";
import dotenv from "dotenv";
import featureRoute from "./routes/featuredproductRoute.js";
import specialproductRoute from "./routes/specialproductRoute.js";

dotenv.config(); // Load environment variables
const app = express();
const PORT = process.env.PORT || 6000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// Connect to the database
dbConnect(process.env.DBURL, process.env.DBNAME);

// Routes
app.use("/product", productRoute);
app.use("/featureProduct",featureRoute)
app.use('/specialProduct',specialproductRoute)

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});