/** Routes for foods. */

const express = require("express");
const slugify = require("slugify");
const { NotFoundError, BadRequestError } = require("../expressError");

const db = require("../db");

const router = new express.Router();


/** GET / => show foods for last 7 days
 *
 * =>  {days: {date, foods}}
 *
 * */
router.get('/', async function (req, res, next) {
  // Get list of foods for last 7 days
})

/** GET /[id] => detail on food
 *
 * =>  {food: {id, name}}
 *
 * */
router.get('/:id', async function (req, res, next) {
  // Get single food item, show days it's attached to
})