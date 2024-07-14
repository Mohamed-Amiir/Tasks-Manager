const express = require('express');
const auth = require('../middlewares/authMiddleware');

const router = express.Router();
const taskController = require('../controllers/taskController');
// Create a new task
router.post('/create', auth , taskController.generateTask);

// Edit an existing task
router.put('/edit/:id', taskController.editTask);

module.exports = router;