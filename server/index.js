require('dotenv').config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8888;
const front = process.env.FRONT_END_URL || "*";

// CORS
app.use(cors({
  origin: front,
  credentials: true
}));

// Middleware
app.use(express.static(path.join(__dirname, "..", "client", "build"))); // Serve React
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

// Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// API base route
app.get("/", (req, res) => {
  res.render("index");
});

// 🔁 Fallback to React for any other route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

// Start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
