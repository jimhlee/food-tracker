const express = require("express");
const app = express();

const { NotFoundError, BadRequestError } = require("./expressError");

const foodRoutes = require('./routes/foods')
const dayRoutes = require('./routes/days')
const reviewRoutes = require('./routes/review')

app.use(express.json());
// app.use(express.urlencoded());

app.use('/foods', foodRoutes)
app.use('/day', dayRoutes)
app.use('/review', reviewRoutes)

/** 404 handler: matches unmatched routes; raises NotFoundError. */
app.use(function (req, res, next) {
  throw new NotFoundError();
});

/** Error handler: logs stacktrace and returns JSON error message. */
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
  return res.status(status).json({ error: { message, status } });
});


module.exports = app;
