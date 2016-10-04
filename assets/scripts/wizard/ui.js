'use strict';

// const app = require('../app');

const clearInputField = () => {
  $('.input').val('');
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};

const newProjectSuccess = (data) => {
  // app.project = data.project;
  console.log(data);
};

const showProjectsTemplate = require('../templates/project-listing.handlebars');

const getProjectsSuccess = (projects) => {
  $('.title-display').html(showProjectsTemplate(projects));
  console.log(projects);
};

const updateProjectSuccess = () => {
  clearInputField();
  $('#updateProjectModal').modal('hide');
};

module.exports = {
  success,
  failure,
  newProjectSuccess,
  getProjectsSuccess,
  updateProjectSuccess,
};
