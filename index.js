const express = require("express");
const mongoose = require("mongoose");
const addnotes = require('./src/routes/add_notes/router.add_notes');
const bodyParser = require("body-parser");
const getNotes = require('./src/routes/get_notes/router.get_notes');

const PORT = process.env.PORT || 5001;
const db = "mongodb+srv://rihaan:nasirulahmed@cluster0.o1csf.mongodb.net/notesapp?retryWrites=true&w=majority";


const app = express();

app.use(bodyParser.json());
app.use(express.json());



mongoose
  .connect(db, {})
  .then(() => {
    console.log("connected to db");

  })
  .catch((e) => console.log(e));



//midllewares
app.use("/api", addnotes);
app.use("/api", getNotes);

app.listen(PORT, () => {
  console.log("connected on port " + PORT);
});

// mongodb+srv://rihaan369:<password>@cluster0.o8mun.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
