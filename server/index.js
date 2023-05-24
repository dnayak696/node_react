const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8000;


app.use("/api", require("./routes/userRoute"))
app.use("/api", require("./routes/taskRoute"))

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});