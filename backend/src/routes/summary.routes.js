const router = require('express').Router();
const summaryController = require('../controllers/summary.controller');

router.get('/', summaryController.getSummary);
module.exports = router;