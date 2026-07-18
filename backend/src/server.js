require("dotenv").config();
const app = require("./app");
const pool = require("./config/db");

const PORT = process.env.PORT;

async function startServer() {
    try {
        await pool.query("SELECT NOW()");
        console.log("Database Connected");

        app.listen(PORT, () => {
            console.log(` Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error("❌ Database Connection Failed");
        console.error(err.message);
    }
}

startServer();