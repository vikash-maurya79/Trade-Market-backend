const express = require("express")
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const AuthRouter = require('./routers/authRouter/AuthRouter.js');
const buySellRouter = require('./routers/buySellRouter/buySellRouter.js');
const checkStockRouter = require('./routers/checkStockRouter/checkStockRouter.js');
const logoutRouter = require('./routers/logoutRouter/logoutRouter.js');
const UserRouter = require('./routers/userRouter/UserRouter.js');
const viewStockRouter = require('./routers/viewStockRouter/viewStockRouter.js');


require("dotenv").config();
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3001;
const url = process.env.MONGO_URL;


mongoose.connect(url);
console.log("Database connected");

app.use('/check-user', UserRouter);  // login and getting user
app.use('/user', AuthRouter);
app.use('/view-stock', viewStockRouter);
app.use('/stock', buySellRouter);
app.use('/data', checkStockRouter);
app.use('/user-logout', logoutRouter);


app.listen(PORT, () => {
    console.log("Server started at port 3001");

})