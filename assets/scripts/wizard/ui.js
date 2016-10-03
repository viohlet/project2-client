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

// const onIndexProjectsSuccess = (data) => {
//   document.getElementById("index").innerHTML = 'All projects: '+ data.projects.length;
//   $('#index').fadeIn('fast').delay(4000).fadeOut('fast');
// };

module.exports = {
  success,
  failure,
  newProjectSuccess,
  // onIndexProjectsSuccess,
};
