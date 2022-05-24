import express from "express";

const app = express();
import dotenv from 'dotenv'
dotenv.config()
import connectDB from "./db/connect.js";
import authRoutes from "./routes/authRoutes.js";
import jobsRoutes from "./routes/jobsRoutes.js";

import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use('/api/v1/auth', authRoutes);
app.use("/api/v1/jobs", jobsRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
          console.log(`Server listening ${port}`);
        });

    } catch (error) {
        console.log(error);
    }
}

start()