module.exports = (sequelize, Sequelize) => {
    const Letter = sequelize.define("letter", {
        symbol: {
            type: Sequelize.STRING
        }},
        {
            // Don't add the timestamp attributes (updatedAt, createdAt)
            timestamps: false,
            // Don't use camelcase but underscore (updatedAt will be updated_at)
            underscored: true,
            // Disable the modification of tablesnames. No more plural names
            freezeTableName: true,
            // Define the table's name
            tableName: 'letter',
    });

    return Letter;
}