require("dotenv").config();

const config = Object.freeze({
    PORT: process.env.PORT || 3000,
    databaseURL: process.env.MONGODB_URL || "mongodb://localhost:27017/POS-Inventory",
    nodeENV: process.env.NODE_ENV || "development"
});

module.exports = config;