// Start the server
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log(con.connection);
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log("DB connection failed");
    console.log(err);
  });



const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}... `);
});
