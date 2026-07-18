const router = require('express').Router();
const { getCategories, createCategory, deleteCategory } = require('../controllers/category.controller');

router.get('/', getCategories).post('/', createCategory).delete('/:id', deleteCategory);


module.exports = router;