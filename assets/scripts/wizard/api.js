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

// const showProject = (data) => {
//   let project_id = data.project.id;
//   return $.ajax({
//     url: app.host + '/projects/' + project_id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     }
//   });
// };

module.exports = {
  newProject,
  getProjects,
  // showProject

};
