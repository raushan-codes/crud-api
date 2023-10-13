"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const db_1 = require("./config/db");
const PORT = 8080;
app_1.app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
    (0, db_1.connectToDB)();
});
