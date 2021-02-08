const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { join } = require("path");

const app = express();
console.log("here")
console.log(process.env.PORT)
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(join(__dirname, "build")));

app.listen(port, () => console.log(`Server listening on port ${port}`));
