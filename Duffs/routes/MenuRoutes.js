
// router required
const express = require("express");
const router = express.Router();

// import Menu Services
const menuService = require("../Services/MenuServices");


// list route

router.get("/List", async (request,response)=>{
    const menuItems = await menuService.ListMenuItems();
    response.render("MenuPages/List", {menuItems: menuItems});
});

// new route

router.get("/New", async (request,response)=>{
    response.render("MenuPages/New"); // return to the view the item information
});

router.post("/AddMenuItem", async (request,response)=>{
    
    const { name } = request.body;
    const { description } = request.body;
    const { price } = request.body;
    const { type } = request.body;

    const result = await menuService.AddMenuItem(name,description,price,type);
    response.redirect("/Menu/List");
})

// edit route

router.get("/Edit/:id", async (request,response)=>{
    const { id } = request.params;
    const menuItem = await menuService.ListMenuItem(id);
    response.render("MenuPages/Edit", {menuItem: menuItem});
});

router.post("/EditMenuItem", async (request,response)=>{
    const { id } = request.body;
    const { name } = request.body;
    const { description } = request.body;
    const { price } = request.body;
    const { type } = request.body;

    const result = await menuService.EditMenuItem(id,name,description,price,type);
    response.redirect("/Menu/List")
});

// Delete route

router.get("/Delete/:id", async (request,response) =>{
   const { id } = request.params
    await menuService.DeleteItem(id);
    response.redirect("/Menu/List");
})

module.exports = router; // Export the router