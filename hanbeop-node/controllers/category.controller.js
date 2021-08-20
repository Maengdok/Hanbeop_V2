const db = require("../models");
const Category = db.category;
const Op = db.Sequelize.Op;


// Retrieve all Categories from the database
exports.findAll = (request, response) => {
    const name = request.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Category.findAll({ where: condition })
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send({
            message: err.message || " Some Error occured while retrieving categories."
        });
    });
};

// Retrieve a single category
exports.findOne = (request, response) => {
    const id = request.params.id;

    Category.findByPk(id)
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send({
            message: "Error retrieving Category with id:" + id
        });
    });
};