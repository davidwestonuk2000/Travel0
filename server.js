const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { join } = require("path");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(join(__dirname, "build")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

//app.listen(port, () => console.log(`Server listening on port ${port}`));
