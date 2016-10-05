'use strict';

const app = require('../app');

const newProject = (data) => {
  console.log(data);
  return $.ajax({
    url: app.host+ '/projects',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const getProjects = () => {
  return $.ajax({
    url: app.host + '/projects',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

const showProject = (data) => {
  let project_id = data.project.id;
  return $.ajax({
    url: app.host + '/projects/' + project_id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

const updateProject = (data, id) => {
  return $.ajax({
    url: app.host + '/projects/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const deleteProject = (id) => {
  return $.ajax({
    url: app.host + '/projects/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};



const showUserStories = (data) => {
  let user_story_id = data.user_story.id;
  return $.ajax({
    url: app.host + '/user_stories/' + user_story_id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

const createUserStory = (data) => {
  console.log(data);
  return $.ajax({
    url: app.host+ '/user_stories',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      user_story: {
        project_id: data,
      }
  }});
};


module.exports = {
  newProject,
  getProjects,
  showProject,
  updateProject,
  deleteProject,
  showUserStories,
  createUserStory,
};
