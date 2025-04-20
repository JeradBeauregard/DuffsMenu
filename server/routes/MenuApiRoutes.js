// router required
const express = require("express");
const router = express.Router();

// import Menu Services
const menuService = require("../Services/MenuServices");

router.get("/ListMenuItems", async (request,response)=>{
    const result = await menuService.ListMenuItems();
    response.json(result);

});

// example id:  67cb53471a71311506795729
// example json response: 
//  {"_id":"67cb53471a71311506795729",
// "name":"Onion Rings",
// "description":"Crispy battered onion rings.",
// "price":7.5,"type":"side"}

router.get("/ListMenuItem", async (request,response)=>{
const { id } = request.body;
const result = await menuService.ListMenuItem(id);
response.json(result);
});

router.get("/ListMenuItemsByType/:type", async (request,response)=>{
const { type } = request.params;
const result = await menuService.ListMenuItemsByType(type);
response.json(result);
});

router.post("/AddMenuItem", async (request, response)=>{
    const { name, description, price, type } = request.body;
    const result = await menuService.AddMenuItem(name,description,price,type);
    response.json(result);
});

router.put("/EditMenuItem",async (request,response)=>{
    const {id,name,description,price,type} = request.body;
    const result = await menuService.EditMenuItem(id,name,description,price,type);
    response.json(result);
});

router.delete("/DeleteItem", async (request,response)=>{
    const { id } = request.body;
    const result = await menuService.DeleteItem(id);
    response.json(result);
});



module.exports = router; // Export the router