const db = require("../models");
const Letter = db.letter;
const Op = db.Sequelize.Op;


// Retrieve all Letters from the database
exports.findAll = (request, response) => {
    const symbol = request.query.symbol;
    var condition = symbol ? { symbol: { [Op.like]: `%${symbol}%` } } : null;

    Letter.findAll({ where: condition })
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send({
            message: err.message || " Some Error occured while retrieving letters."
        });
    });
};