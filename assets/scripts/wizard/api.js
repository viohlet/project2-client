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
    data,
  });
};

const indexGames = () => {
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

module.exports = {
  newProject,
  // updateGame,
  indexGames,
  // getGameById,
  // historyGames,
  // joinGame,
};
