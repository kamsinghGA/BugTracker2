// Connect to the database
require('dotenv').config();
require('./mern-rep-startercode/config/database');

// Require the Mongoose models
const User = require('./mern-rep-startercode/models/user');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, item, category, order;
let users, items, categories, orders;
