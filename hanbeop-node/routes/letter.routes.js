module.exports = app => {
    const letters = require ("../controllers/letter.controller");

    var router = require("express").Router();

    // All letters
    router.get("/", letters.findAll);

    app.use('/api/lettres', router);
}