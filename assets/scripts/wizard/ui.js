'use strict';

const app = require('../app');

const success = () => {
  // console.log(data);
};

const failure = () => {
  // console.log(error);
};

const newProjectSuccess = (data) => {
  app.project = data.project;
  console.log(data);
};

const onIndexGamesSuccess = (data) => {
  document.getElementById("message").innerHTML = 'All projects: '+ data.games.length;
  $('#showallprojects').fadeIn('fast').delay(4000).fadeOut('fast');
};

module.exports = {
  success,
  failure,
  newProjectSuccess,
  onIndexGamesSuccess,
};
