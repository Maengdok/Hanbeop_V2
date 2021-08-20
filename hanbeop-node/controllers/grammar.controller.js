const db = require("../models");
const Grammar = db.grammar;
const Op = db.Sequelize.Op;


// Retrieve all Grammars from the database
exports.findAll = (request, response) => {
    const title = request.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Grammar.findAll({ where: condition })
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send({
            message: err.message || "Some Error occured while retrieving grammars."
        });
    });
};

// Retrieve all Grammars from selected Letter and selected Category
exports.findAllWithConditions = (request, response) => {
    const letter = request.query.letter;
    const category = request.quesry.category;
    var lCondition = letter ? { letter: { [Op.like]: `%{letter}%` } } : null;
    var cCondition = category ? { category: { [Op.like]: `%{category}%` } } : null;

    Grammar.findAll({ 
        where: {
            [Op.and]: [{lCondition}, {cCondition}]
        }
        .then(data => {
            response.send(data);
        })
        .catch(err => {
            response.status(500).send({
                message: err.message || "Some Error occured while retrieving grammars with letter and category condition."
            })
        })
    });
}

exports.findGrammarWithLetter = (request, response) => {
    const letter = request.query.letter;
    var condition = letter ? { letter: { [Op.like]: `%{letter}%` } } : null;

    Grammar.findAll({ where: condition })
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send({
            message: err.message || "Some error occured while retrieving grammars with letter condition."
        })
    });
}

exports.findGrammarWithCategory = (request, response) => {
    const category = request.query.category;
    var condition = category ? { category: { [Op.like]: `%{category}%` } } : null;

    Grammar.findAll({ where: condition })
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send({
            message: err.message || "Some error occured while retrieving grammars with category condition."
        })
    });
}

exports.findGrammarByTitle = (request, response) => {
    const title = request.query.title;
    var condition = title ? { title: { [Op.like]: `%{title}%` } } : null;

    Grammar.findAll({ where: condition })
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send({
            message: err.message || "Some error occured while retrieving grammars with title condition."
        })
    })
}

// Retrieve a single grammar
exports.findOne = (request, response) => {
    const id = request.params.id;

    Grammar.findByPk(id)
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send({
            message: err.message || "Error retrieving Grammar with id:" + id
        });
    });
};