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


const showUserStoriesSuccess = (user_stories) => {
  const showUserStoriesTemplate = require('../templates/user-stories-listing.handlebars');
    $('.userstories-display').html(showUserStoriesTemplate(user_stories));
    console.log(user_stories);
};

const createUserStorySuccess = (data) => {
  // app.project = data.project;
  console.log(data);
};

module.exports = {
  success,
  failure,
  newProjectSuccess,
  getProjectsSuccess,
  updateProjectSuccess,
  showUserStoriesSuccess,
  createUserStorySuccess,
};
