const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.port || 3001;
app.listen(3001, () => {
  try {
    console.log("App is running on port 3001");
} catch (error) {
    console.log("Error", error.massage);
}
});
