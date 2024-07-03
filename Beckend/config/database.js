const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI)
        .then((data) => {
            console.log(`MongoDB Connected With Server: ${data.connection.host}`);
            
        })
        .catch((err) => {
            console.error("Error:", err);
        });
};

module.exports = connectDatabase;