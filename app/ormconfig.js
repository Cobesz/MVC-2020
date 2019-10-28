const ConfigService = require("./src/config/config.service");

const configService = new ConfigService.ConfigService(`${process.env.NODE_ENV}.env`);

const username = configService.get('DATABASE_USER') || "mysql";
const password = configService.get('DATABASE_PASSWORD') || "example";
module.exports = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    username,
    password,
    "database": "mvc-2020",
    "synchronize": true,
    "dropSchema": false,
    "logging": true,
    "entities": [__dirname + "/src/**/*.entity.ts", __dirname + "/dist/**/*.entity.js"],
    "migrations": ["migrations/**/*.ts"],
    "subscribers": ["subscriber/**/*.ts", "dist/subscriber/**/.js"],
    "cli": {
        "entitiesDir": "src",
        "migrationsDir": "migrations",
        "subscribersDir": "subscriber"
    }
};
