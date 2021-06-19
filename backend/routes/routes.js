const express = require("express");
const route = express.Router();
const Books = require("../models/Book")

route.get("/books", async (req, res)=>{
    try {
        let books = await Books.findAll();
        return res.json(books);
    } catch (error) {
        return res.json({status: 500, error});
    }
    
});

route.post("/books", async (req, res)=>{
    try {
        const book = await Books.create(req.body);
        return res.json({status: 200, book})
    } catch (error){
        console.log(error)
        return res.json({status: 500, error})
    }
});


module.exports = route;
