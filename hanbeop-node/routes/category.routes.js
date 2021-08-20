module.exports = app => {
    const categories = require ("../controllers/category.controller");

    var router = require("express").Router();

    // All categories
    router.get("/", categories.findAll);

    // Category by id
    router.get("/:id", categories.findOne);

    app.use('/api/categories', router);
}