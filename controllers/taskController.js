const mongoose = require('mongoose');
const Task = require('../models/task'); // Adjust the path to your Task model

const generateTask = async (req, res) => {
  try {
    // Generate a new task here
    const newTask = new Task({
      type: req.body.type,
      body: req.body.body,
      creator: req.user, // Use the user ID from the verified token
      isShared: req.body.isShared,
    });

    // Save the new task to the database
    const task = await newTask.save();

    // Return the new task as the response
    res.status(200).json(task);
  } catch (error) {
    // Handle any errors that occur during saving
    res.status(500).json({ error: error.message });
  }
};






const editTask = async (req, res) => {
    const taskId = req.params.taskId;
    const updates = req.body;

    try {
        // Find the task by ID and update it with the new data
        const updatedTask = await Task.findByIdAndUpdate(taskId, updates, {
            new: true,
        });

        // Check if the task exists
        if (!updatedTask) {
            return res.status(404).json({ error: "Task not found" });
        }

        // Return the updated task as the response
        res.status(200).json(updatedTask);
    } catch (error) {
        // Handle any errors that occur during updating
        res.status(500).json({ error: error.message });
    }
};

module.exports = { generateTask, editTask };