require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const { dbConnect } = require("./models/connection");
dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Importing the routes
const homeRouter = require("./routes/homeRouter");
const userRouter = require("./routes/userRouter");
const chartRouter = require("./routes/chartRouter");
const teacherRouter = require("./routes/teacherRouter");
const studentRouter = require("./routes/studentRouter");
const adminRouter = require("./routes/adminRouter");

// Route for api homepage
app.use("/", homeRouter);
app.use("/user", userRouter);
app.use("/chart-data", chartRouter);
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);
app.use("/admin", adminRouter);

const PORT = process.env.PORT || 5001;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server started at PORT: ${PORT}`);
  }
});
