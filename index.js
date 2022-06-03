const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')
const cookieParser=require("cookie-parser");
const connection = require("./db");
const loginRoutes = require("./routes/logRoute");
const signupRoutes = require("./routes/regRoute");
const customerRoutes=require("./routes/cart");
const { isAuthenticatedUser } = require("./Middlewares/loginauth");
const {authorizeRoles}=require("./Middlewares/positionauth");
//middleware
app.use(express.json());
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors());
//routes
app.use("/auth/login",loginRoutes);
app.use("/auth/register",signupRoutes);
app.use("/cart",isAuthenticatedUser,authorizeRoles("customer"),customerRoutes);
//database connection
connection();











const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));