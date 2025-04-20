require('dotenv').config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.PORT;
const front = process.env.FRONT_END_URL

app.use(cors({
  origin: front, // Replace with your frontend URL
  credentials: true
}));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing
const menuRoutes = require("./routes/MenuRoutes");
const storeRoutes = require("./routes/StoreRoutes");
const menuApi = require("./routes/MenuApiRoutes");
const storeApi = require("./routes/StoreApiRoutes");

app.use("/menu", menuRoutes);
app.use("/stores", storeRoutes);
app.use("/MenuApi", menuApi);
app.use("/StoreApi", storeApi);

app.get("/", async (request, response) => {
    response.render("index");
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Start server
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
