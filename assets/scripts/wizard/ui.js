'use strict';

// const app = require('../app');

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
  $('.content-display').html(showProjectsTemplate(projects));
  console.log(projects);
};

module.exports = {
  success,
  failure,
  newProjectSuccess,
  getProjectsSuccess,
};
