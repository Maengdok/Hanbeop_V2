module.exports = (sequelize, Sequelize) => {
    const Grammar = sequelize.define("grammar", {
        title: {
            type: Sequelize.STRING
        },
        meaning: {
            type: Sequelize.STRING
        },
        phrasing: {
            type: Sequelize.STRING
        },
        example: {
            type: Sequelize.STRING
        },
        letter: {
            type: Sequelize.INTEGER
        },
        category: {
            type: Sequelize.INTEGER
        }},
        {
            // Don't add the timestamp attributes (updatedAt, createdAt)
            timestamps: false,
            // Don't use camelcase but underscore (updatedAt will be updated_at)
            underscored: true,
            // Disable the modification of tablesnames. No more plural names
            freezeTableName: true,
            // Define the table's name
            tableName: 'grammar',
    });

    return Grammar;
}