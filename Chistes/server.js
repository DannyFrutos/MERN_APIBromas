const { PORT } = require("./server/config/settings");
const express = require("express");

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));

require("./server/config/mongoose.config");
const routerJokes = require("./server/routes/jokes.routes");
routerJokes(app);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));