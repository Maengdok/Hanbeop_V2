module.exports = app => {
    const grammars = require ("../controllers/grammar.controller");

    var router = require("express").Router();

    // All grammars
    router.get("/", grammars.findAll);

    router.get("/:letter&:category", grammars.findAllWithConditions);

    router.get("/:letter", grammars.findGrammarWithLetter);

    router.get("/:category", grammars.findGrammarWithCategory);

    router.get("/:title", grammars.findGrammarByTitle);

    // Grammar by id
    router.get("/:id", grammars.findOne);

    app.use('/api/grammaires', router);
}