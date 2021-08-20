module.exports = {
    HOST: "",
    PORT: "",
    USER: "",
    PASSWORD: "",
    DB: "",
    dialect: "mysql",
    pool: {
        max: 10,
        min: 0,
        acquired: 30000,
        idle: 10000
    }
};