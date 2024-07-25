const express = require('express');
const app = express();
const mongoose = require('mongoose');
const classRoutes = require('./routes/classes');
const cors = require('cors');

app.use(cors());
app.use(express.json()); // parses the incoming requests and attaches it to request body
app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
})
// define our routes
app.use("/api/classes", classRoutes);

mongoose.connect("mongodb+srv://saikarthikvm:tDgSO9HGdTlenLCE@todolist.qkohekn.mongodb.net/").then(() => 
{
    // define all our middleware and routes and then we listen
    app.listen(4000, () => 
        {
            console.log("Listening on port 4000",);
        })
}).catch((error) => {console.log(error);})