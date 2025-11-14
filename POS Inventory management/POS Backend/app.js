require("dotenv").config();

const express = require("express");  // 👈 yaha sahi karo
const connectDB = require("./config/database");
const config = require("./config/config");
const createHttpError = require("http-errors");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const app = express();

const PORT = config.PORT;
connectDB();

// Root Endpoints

app.get("/", (req, res) => {
    res.json({ message: "Hello From Pos Server !" });
});

// Other Endpoints
app.use("/api/user", require("./routes/userRoute"))

// Global Error Handler
app.use(globalErrorHandler);

// Server
app.listen(PORT, () => {
    console.log(`Pos Server is Listening on port ${PORT}.`);
});
