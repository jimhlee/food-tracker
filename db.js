/** Database setup for Food-Tracker. */

const { Client } = require("pg");

// Connects to test db if in testing environment
// Test db not yet implemented
const DB_URI = process.env.NODE_ENV === "test"
    ? "postgresql:///foodtracker_test"
    : "postgresql:///foodtracker";

const db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;
