const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isShared: {
        type: Boolean,
        default: false
    }
});

const Task = mongoose.model('tasks', taskSchema);

module.exports = Task;