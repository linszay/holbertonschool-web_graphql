const mongoose = require('mongoose');
const schema =  mongoose.Schema;

const taskSchema = new schema({
  title: String,
  weight: Number,
  description: String,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
