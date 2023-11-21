const mongoose = require('mongoose');
const schema =  require('mongoose.Schema');

const projectSchema = new schema({
  title: String,
  weight: Number,
  description: String,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
