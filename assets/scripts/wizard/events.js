'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');




const onNewProject = function (event) {
  event.preventDefault();
	let data = getFormFields(event.target);
	console.log();
  api.newProject(data)
	  .done(ui.newProjectSuccess)
	  .fail(ui.failure);
};

// const SaveNewProject = function(){
//   $('.newprojects').on('click', onNewProject);
// };

const onIndexGames = function (event) {
  event.preventDefault();
  api.indexGames()
    .done(ui.onIndexGamesSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  // $('.tile').on('click', onClickTile);
	$('#addnewtitle').on('submit', onNewProject);
	// $('#getGameById').on('submit', onGetGameById);
  $('#index-games').on('submit', onIndexGames);
	// $('.new-project').on('click', onNewProject);

};

module.exports = {
  addHandlers,
  // SaveNewProject,
};
