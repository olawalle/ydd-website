const express = require('express');

const app = express();

const port = process.env.PORT || 7600;

app.use(express.static(__dirname + "/out"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/out/index.html");
});


app.listen(port, () => console.log(`server running on port ${port}`));
