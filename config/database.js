const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI)
.then(function() {
    console.log("Connected to MongoDB.")
})
.catch(function(err){
    console.log(`MongoDB connection error: ${err}`);
    process.exit();
});