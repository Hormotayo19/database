const express = require ("express");
const mongoose = require('mongoose');
const userRoute = require("./routes/userRoutes.js")
const productRoute = require('./routes/productRoutes.js')
const compass_string = "mongodb://localhost:27017/cohort8_DB"
const atlas_string = "mongodb+srv://iqbalbusari2020_db_user:Hormotayo10.@cluster0.porvb63.mongodb.net/database?appName=Cluster0"

mongoose.connect(compass_string)//"mongodb://localhost:27017/cohort8_DB"
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Connection Error: ', err));
const app = express();
const port = 6001


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is active")
})
app.use("/users", userRoute)
app.use("/products", productRoute)
app.listen(port, ()=> {
    console.log(`Server is up and running on port : ${port}`);
});