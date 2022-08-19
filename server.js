const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require());


mongoose.set("debug", true);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));