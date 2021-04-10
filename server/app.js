const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()
const port = process.env.PORT || 4000;

// mongodb
mongoose.connect(`mongodb+srv://hack36Hackers:UK9sjC93EoKkvDz2@cluster0.rm0wt.mongodb.net/db?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});
mongoose.connection.on("connected", () => {
    console.log("connected to mongodb");
});
mongoose.connection.on("error", (e) => {
    console.log(e)
})
//My routes
const authRoutes = require("./routes/auth");
const medicineRoutes = require('./routes/Medicine')
// app specific
app.use(express.json());

//Adding routes to the app
app.use("/api", authRoutes);
app.use('/api', medicineRoutes)


app.listen(port, () => {
    console.log(`Server Started at ${port}`);
});
