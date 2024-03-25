const mongoose = require("mongoose");

const DB = `mongodb+srv://User:YaeylVyhXhLh9Vmr@cluster0.ee1igr9.mongodb.net/UserMangement?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(DB, {
    useUnifiedTopology: true,

    useNewUrlParser: true,
  })
  .then(() => console.log("Connect"))
  .catch((error) => {
    console.log(error, "not connected");
  });
