require('dotenv').config(); // .env configuration
const express = require("express"); // imports express modules
const path = require("path"); // imports node.js pathing modules
//set up Express object and port
const app = express(); // creates express application, allows us to use http requests within app
const port = process.env.PORT // sets up default port for localhost, if a service uses its own itll use that instead
//test message
app.use(express.static(path.join(__dirname, "public"))); // to access public folder
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); // Parses JSON requests
// routing requirements

const menuRoutes = require("./routes/MenuRoutes");
const storeRoutes = require("./routes/StoreRoutes");
const menuApi = require("./routes/MenuApiRoutes");
const storeApi = require("./routes/StoreApiRoutes");

//use routes

app.use("/menu", menuRoutes);
app.use("/stores", storeRoutes);
app.use("/MenuApi",menuApi);
app.use("/StoreApi",storeApi);

app.get("/", async (request, response)=>{
    response.render("index");
});
//set up server listening
app.listen(port, () => { // listens for server 
console.log(`Listening on http://localhost:${port}`); // when server runs callback function console.log executes
});

app.set("views", path.join(__dirname, "views")); //Specifies the views folder where Pug template files are stored.
                                                  //Express will look in this folder when rendering templates.
app.set("view engine", "pug"); // Sets Pug as the template engine.
                                //This allows Express to automatically convert .pug files into HTML when using res.render().

//__dirname: This is a built-in Node.js variable that gives the absolute path of the current directory (where your script is running).

