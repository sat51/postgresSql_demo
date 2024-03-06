import express from "express";
import db from "../config/index.js";
import users from '../routes/user.route.js'

const app = express();

db.sequelize.sync().then(()=>{
    app.listen(3000,()=>{
        console.log("server is running on port 3000");
      })
})
app.use('/users',users);