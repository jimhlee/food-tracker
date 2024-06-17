\echo 'Delete and recreate biztime db?'
\prompt 'Return for yes or control-C to cancel > ' userInput

DROP DATABASE IF EXISTS foodtracker;
CREATE DATABASE foodtracker;
\connect foodtracker;

CREATE TABLE foods (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
)

-- meal_type is optional. May remove later.
CREATE TABLE meals (
    id TEXT PRIMARY KEY,
    date DATE,
    meal_type TEXT
);

-- Junction table for meals and foods
CREATE TABLE meal_foods (
    meal_id TEXT,
    food_id TEXT,
    PRIMARY KEY (meal_id, food_id),
    FOREIGN KEY (meal_id) REFERENCES meals(id),
    FOREIGN KEY (food_id) REFERENCES foods(id)
)