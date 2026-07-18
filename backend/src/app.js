const express = require('express');
const cors = require('cors');
const categoryRoutes = require('./routes/category.routes');
const expenseRoutes = require('./routes/expense.routes');
const summaryRoutes = require('./routes/summary.routes');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/categories', categoryRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/summary', summaryRoutes);

module.exports = app;